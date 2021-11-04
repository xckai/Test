module.exports = {
  Name: 'Permutations',
  TestCaseAcc: 1,
  Init() {
    return { data: [3, 1, 5, 6, 8] };
  },
  Exec(ctx) {
    return {
      data: getPyStepV2(ctx.data, ctx.data.length)
    };
  },
  Check(ctx) {
    console.log();

    console.log(ctx.data);
  }
};
function getPyStep(arr, step) {
  if (step == 1) {
    return arr.map((v) => [v]);
  } else {
    return arr
      .map((crtVal) => {
        return getPyStep(arr, step - 1)
          .filter((item) => item.indexOf(crtVal) === -1)
          .map((item) => [...item, crtVal]);
      })
      .reduce((p, c) => p.concat(c), []);
  }
}
function getPyStepV2(arr) {
  let t = [];
  let step = 1;
  while (step <= arr.length) {
    if (step == 1) {
      t = arr.map((v) => [v]);
    } else {
      t = arr
        .map((crtVal) => {
          return t.filter((item) => item.indexOf(crtVal) === -1).map((item) => [...item, crtVal]);
        })
        .reduce((p, c) => p.concat(c), []);
    }
    ++step;
  }
  return t;
}
