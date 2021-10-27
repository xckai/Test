using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Azure.Identity;
using Azure.Security.KeyVault.Keys.Cryptography;
using System.Security.Cryptography;
using System.Text;
using System.Linq;
using Newtonsoft.Json.Linq;

namespace SignatureService
{ 
    public class SignSignatureRequestDto
    {
        public string Note { get; set; }
        public string ContentToBeSigned { get; set; }
        public string Tag { get; set; }
    }
    public class VerifySignatureRequestDto
    {
        public string Note { get; set; }
        public string ContentToBeSigned { get; set; }
        public string Signature { get; set; }
    }
    public class AuditLogItem
    {
        public string PartitionKey { get; set; }
        public string RowKey { get; set; }
        public User User { get; set; }
        public string Action { get; set; }
        public SignSignatureRequestDto SignSignatureRequest { get; set; }
        public VerifySignatureRequestDto VerifySignatureRequest { get; set; }
        public string Signature { get; set; }
    }
    public class User
    {
        public string Name { get; set; }
        public string Email {  get; set; }
        public string Phone {  get; set; }   
    }
    public static class SignatureService
    {
        [FunctionName("SignSignature")]
        public static async Task<IActionResult> SignSignature(
            [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] HttpRequest req,
            [Table("AuditLog", Connection = "AuditLogConnectStr")] IAsyncCollector<AuditLogItem> asyncCollector,
            ILogger log)
        {
            User user;
            try
            {
                user = ValidCurrentId4User(req);
            }catch (Exception ex)
            {
                return new ObjectResult(ex.Message)
                {
                    StatusCode = StatusCodes.Status401Unauthorized
                };
            }
            if ( !AuthorizationCheck(user))
            {
                return new ObjectResult("You don't have this permission!")
                {
                    StatusCode = StatusCodes.Status403Forbidden
                };
            }


            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            SignSignatureRequestDto reqDto = JsonConvert.DeserializeObject<SignSignatureRequestDto>(requestBody);


            var keyId = GetEnvironmentVariable("SignatureKeyId");
            var client = new CryptographyClient(new Uri(keyId), new DefaultAzureCredential());

            SHA256CryptoServiceProvider hasher = new SHA256CryptoServiceProvider();
            byte[] hash = hasher.ComputeHash(System.Text.Encoding.UTF8.GetBytes(reqDto.ContentToBeSigned));
            var res = await client.SignAsync(SignatureAlgorithm.RS256, hash);
            var signature = Convert.ToBase64String(res.Signature);

            await asyncCollector.AddAsync(new AuditLogItem()
            {
                PartitionKey = "SignSignature",
                RowKey = Guid.NewGuid().ToString("N"),
                SignSignatureRequest = reqDto,
                User=user,
                Action= "SignSignature",
                Signature =signature,
            }); ;

            return new OkObjectResult(new {Signature = signature}); ;
        }
        [FunctionName("VerifySignature")]
        public static async Task<IActionResult> VerifySignature(
            [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] HttpRequest req,
            [Table("AuditLog", Connection = "AuditLogConnectStr")] IAsyncCollector<AuditLogItem> asyncCollector,
            ILogger log)
        {
            User user;
            try
            {
                user = ValidCurrentId4User(req);
            }
            catch (Exception ex)
            {
                return new ObjectResult(ex.Message)
                {
                    StatusCode = StatusCodes.Status401Unauthorized
                };
            }
            if (!AuthorizationCheck(user))
            {
                return new ObjectResult("You don't have this permission!")
                {
                    StatusCode = StatusCodes.Status403Forbidden
                };
            }


            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            VerifySignatureRequestDto reqDto = JsonConvert.DeserializeObject<VerifySignatureRequestDto>(requestBody);


            var keyId = GetEnvironmentVariable("SignatureKeyId");
            var client = new CryptographyClient(new Uri(keyId), new DefaultAzureCredential());

            SHA256CryptoServiceProvider hasher = new SHA256CryptoServiceProvider();
            byte[] hash = hasher.ComputeHash(System.Text.Encoding.UTF8.GetBytes(reqDto.ContentToBeSigned));
            var res = await client.VerifyAsync(SignatureAlgorithm.RS256, hash, Encoding.UTF8.GetBytes(reqDto.Signature));

            await asyncCollector.AddAsync(new AuditLogItem()
            {
                PartitionKey = "VerifySignature",
                RowKey = Guid.NewGuid().ToString("N"),
                VerifySignatureRequest = reqDto,
                User = user,
                Action = "VerifySignature"
            }); ;

            return new OkObjectResult(res); ;
        }
        private static User ValidCurrentId4User(HttpRequest req)
        {
            var user = new User();
            var id4PubKey = GetEnvironmentVariable("Encoo_Id4_Public_key");
            var bearerKey = req.Headers["authorization"].ToString();

            if (string.IsNullOrEmpty(bearerKey))
            {
                throw new Exception("No bearer token found!!");
            }
            var jwt = bearerKey.Split(" ")[1];
            if (string.IsNullOrEmpty(jwt))
            {
                throw new Exception("No jwt token found!!");
            }
            string[] parts = jwt.Split(".".ToCharArray());
            var headerContent = parts[0];
            var payloadContent = parts[1];
            var signature = Base64UrlDecode(parts[2]);
            byte[] bytesToSign = getBytes(string.Join(".", headerContent, payloadContent));
            string publicKey = Base64UrlDecode(id4PubKey);
            byte[] sha256Hash;
            using (SHA256 sHA256 = SHA256.Create())
            {
                sha256Hash = sHA256.ComputeHash(bytesToSign);
            }

            RSACryptoServiceProvider rsa = new RSACryptoServiceProvider();
            rsa.ImportParameters(
                new RSAParameters()
                {
                    Modulus = Convert.FromBase64String(publicKey),
                    Exponent = Convert.FromBase64String("AQAB")
                });
            RSAPKCS1SignatureDeformatter rsaDeformatter = new RSAPKCS1SignatureDeformatter(rsa);
            rsaDeformatter.SetHashAlgorithm("SHA256");
            var res = rsaDeformatter.VerifySignature(sha256Hash, Convert.FromBase64String(signature)
            );
            if (!res)
            {
                throw new Exception("Jwt signature is illegal!");
            }

            var payload = JObject.Parse(Encoding.UTF8.GetString(Convert.FromBase64String(Base64UrlDecode(payloadContent))));
            var name = payload?["name"]?.ToString();
            var email = payload?["email"]?.ToString();
            var phone = payload?["phone_number"]?.ToString();
            var exp = payload?["exp"]?.ToString();
            DateTime expDt = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc).AddSeconds(Int32.Parse(exp));
            
            if (DateTime.UtcNow > expDt)
            {
                throw new Exception("Jwt token is expired!");
            }
            user.Name = name; 
            user.Email = email;
            user.Phone = phone;
            return user;
        }
        private static  bool AuthorizationCheck(User user)
        {
            var allowedEmails = GetEnvironmentVariable("SignatureAllowedUserEmails") ?? "";
            var allowedPhones = GetEnvironmentVariable("SignatureAllowedUserPhones") ?? "";
            var foundEmail = allowedEmails.Split(';').Any(email => email.Equals(user.Email));
            var foundPhone = allowedPhones.Split(';').Any(p => p.Equals(user.Phone));
            return foundEmail || foundPhone;
        }
        private static byte[] getBytes(string value)
        {
            return Encoding.UTF8.GetBytes(value);
        }
        private static string Base64UrlDecode(string input)
        {
            string urlDecode = input
                .Replace('_', '/').Replace('-', '+');
            switch (urlDecode.Length % 4)
            {
                case 2: urlDecode += "=="; break;
                case 3: urlDecode += "="; break;
            }
            return urlDecode;
        }
        private static string GenerateBase64Payload(object payload)
        {
            string jsonPayload = JsonConvert.SerializeObject(payload);
            return Convert.ToBase64String(System.Text.Encoding.Unicode.GetBytes(jsonPayload));
        }
        private static string GetEnvironmentVariable(string name)
        {
            return System.Environment.GetEnvironmentVariable(name, EnvironmentVariableTarget.Process);
        }
    }
}
