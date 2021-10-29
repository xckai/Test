module.exports = {
  TestCaseAcc: 1,

  Name: 'lts2',
  Init() {
    const data = [1,5,3,4,6,9,7,8];
    return { d1: data,d2:[1,2,3,5,4,6] };
  },
  Exec(ctx) {
    const originData = ctx.data;
    return {
      data: lts2(ctx.d1, ctx.d2)
    };
    return ctx;
  },
  Check(ctx) {
    console.log();
    console.log(ctx.data);
  }
};
function lts2(a1,a2) {
  let res = Array.from(a1,vv=>Array.from(a2,v=>0));
  for (let i = 0; i < a1.length; ++i){
    for (let j = 0; j < a2.length; ++j){
      if (a1[i] == a2[j]) {
        res[i][j] = getRes(res, i - 1, j - 1) + 1;
      } else {
        res[i][j] = Math.max(getRes(res,i-1,j), getRes(res,i,j-1))
      }
    }
  }
  return res[a1.length-1][a2.length -1]
}
function getRes(res, i, j) {
  if (i < 0 || j < 0) {
    return 0;
  } else {
    return res[i][j];
  }
}