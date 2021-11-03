module.exports = {
  Name: 'scroped',
  TestCaseAcc: 1,
  Init() {
    return { data: ')()())()()(' };
  },
  Exec(ctx) {
    return {
      data: getMax(ctx.data)
    };
  },
  Check(ctx) {
    console.log();

    console.log(ctx.data);
  }
};
function getMax(str) {
  let max = 0;
  for (let i = 0; i < str.length; ++i) {
    let score = 0;
    if (str[i] == '(') {
      for (let j = i; j < str.length; ++j) {
        score = str[j] == '(' ? score + 1 : score - 1;
        if (score < 0) {
          break;
        }
        if (score == 0) {
          max = Math.max(max, j - i + 1);
        }
      }
    }
  }
  return max;
}
function getMaxv2(str) {
  let max = 0;
  let dp = [0];
  for (let i = 1; i < str.length; ++i) {
    let crt = str[i];
    if (crt == '(') {
      dp[i] = dp[i - 1];
    } else {
      let crtScore = 1;
      let tMax = 0;
      let j = i - 1;
      for (j; j >= 0; --j) {
        if (str[j] == '(') {
          crtScore--;
        } else {
          crtScore++;
        }
        if (crtScore < 0) {
          break;
        }
        if (crtScore == 0) {
          tMax = Math.max(tMax, i - j + 1);
        }
      }
      let crtValue = -1;
      if (j > 0) {
        crtValue = Math.max(dp[j], tMax);
      } else {
        crtValue = tMax;
      }
      dp[i] = crtValue;
      max = Math.max(max, crtValue);
    }
  }
  return max;
}
