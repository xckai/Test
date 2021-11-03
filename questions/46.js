module.exports = {
  Name: 'Permutations',
  TestCaseAcc: 1,
  Init() {
    return { data: [5, 4, 6, 2] };
  },
  Exec(ctx) {
    return {
      data: getPermutations(ctx.data)
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
    let res = [];
    for (let i = 0; i < arr.length; ++i) {
      let t = getPyStep(tR, --step);
      t.filter();
    }
  }
}
