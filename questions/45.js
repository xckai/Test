module.exports = {
  Name: 'lessJump',
  TestCaseAcc: 1,
  Init() {
    return { data: [2, 3, 1, 1, 4] };
  },
  Exec(ctx) {
    return {
      data: getLessJump(ctx.data)
    };
  },
  Check(ctx) {
    console.log();

    console.log(ctx.data);
  }
};
function getLessJump(arr) {
  let dp = [0];
  for (let i = 1; i < arr.length; ++i) {
    let min = 300000;
    for (let j = i - 1; j >= 0; --j) {
      let gap = arr[j];
      if (gap >= i - j) {
        min = Math.min(dp[j] + 1, min);
      }
    }
    dp[i] = min;
  }
  return dp[arr.length - 1];
}
