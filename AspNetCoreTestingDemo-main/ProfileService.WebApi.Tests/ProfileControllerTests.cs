using System;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Moq;
using Newtonsoft.Json;
using ProfileService.WebApi.DataContracts;
using ProfileService.WebApi.Exceptions;
using ProfileService.WebApi.Model;
using ProfileService.WebApi.Services;
using Xunit;

namespace ProfileService.WebApi.Tests
{
    public class ProfileControllerTests : IAsyncLifetime
    {
        private readonly Mock<IProfileService> _profileServiceMock = new();

        private HttpClient _httpClient = null!;
        
        public async Task InitializeAsync()
        {
            var hostBuiderV2 = Program.CreateHostBuilder(new string [0])
                .ConfigureWebHost(builder => builder.UseTestServer()).ConfigureServices(
                    (_, services) =>
                    {
                        services.AddSingleton(_profileServiceMock.Object);
                    });

            var host = await hostBuiderV2.StartAsync();
            _httpClient = host.GetTestClient();
        }

        public Task DisposeAsync()
        {
            return Task.CompletedTask;
        }
        
        [Fact]
        public async Task GetProfile_HappyPath()
        {
            var username = "foo";
            var profile = new FullProfile
            {
                Username = username,
                PersonalInfo = TestUtils.TestPersonalInfo,
                EmployerInfo = TestUtils.TestEmployerInfo,
            };
            
            _profileServiceMock.Setup(profileService => profileService.GetFullProfile(username))
                .ReturnsAsync(profile);

            var response = await _httpClient.GetAsync($"api/profile/{username}");
            response.EnsureSuccessStatusCode();
            Assert.Equal(HttpStatusCode.OK, response.StatusCode);

            var returnedJson = await response.Content.ReadAsStringAsync();
            var returnedProfile = JsonConvert.DeserializeObject<FullProfile>(returnedJson);
            Assert.Equal(profile, returnedProfile);
        }
        [Fact]
        public async Task GetProfile_Error()
        {
            var username = "";
            var req = new CreateProfileRequest
            {
                Username = username,
                PersonalInfo = TestUtils.TestPersonalInfo,
            };


            var content = new StringContent(JsonConvert.SerializeObject(req), Encoding.UTF8, "application/json");

            var response =
                await _httpClient.PostAsync($"api/profile", content);
            Assert.Equal(HttpStatusCode.BadRequest, response.StatusCode);
        }


        [Fact]
        public Task GetProfile_ProfileNotFoundException_404()
        {
            return AssertThatGetFullProfileHandlesGivenException(
                givenException: new ProfileNotFoundException("foo"), 
                resultingStatusCode: HttpStatusCode.NotFound);
        }
        
        [Fact]
        public Task GetProfile_StorageUnavailableException_503()
        {
            return AssertThatGetFullProfileHandlesGivenException(
                givenException: new StorageUnavailableException($"database is down"), 
                resultingStatusCode: HttpStatusCode.ServiceUnavailable);
        }
        
        [Fact]
        public Task GetProfile_EmployerServiceUnavailableException_503()
        {
            return AssertThatGetFullProfileHandlesGivenException(
                givenException: new EmployerServiceUnavailableException($"database is down"), 
                resultingStatusCode: HttpStatusCode.ServiceUnavailable);
        }

        private async Task AssertThatGetFullProfileHandlesGivenException(Exception givenException, HttpStatusCode resultingStatusCode)
        {
            var username = "foo";
            
            _profileServiceMock.Setup(profileService => profileService.GetFullProfile(username))
                .ThrowsAsync(givenException);

            var response = await _httpClient.GetAsync($"api/profile/{username}");
            Assert.Equal(resultingStatusCode, response.StatusCode);
        }
    }
}