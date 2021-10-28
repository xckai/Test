module.exports = {
  TestCaseAcc: 1,

  Name: 'lts',
  Init() {
    const data = [1,5,3,4,6,9,7,8];
    return { data };
  },
  Exec(ctx) {
    const originData = ctx.data;
    return {
      data: lts(originData)
    };
    return ctx;
  },
  Check(ctx) {
    console.log();
    console.log(ctx.data);
  }
};
function lts(arr) {
  let res = Array.from({ length:arr.length},v=>1);
  for (let i = 0; i < arr.length; ++i){
    for (let j = 0; j < i; ++j){
      if (arr[j] < arr[i]) {
        res[i] = Math.max(res[j]+1, res[i])
      }
    }
  }
  return Math.max.apply(undefined, res);
}