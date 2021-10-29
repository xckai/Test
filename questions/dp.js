module.exports = {
  Name: 'dp',
  TestCaseAcc: 1,
  Init() {
    return { data: 105 };
  },
  Exec(ctx) {
    return {
      data: getMin(ctx.data)
    };
  },
  Check(ctx) {
    console.log();

    console.log(ctx.data);
  }
};
function init() {
  let cost = new Map();
  cost.set(0, 0);
  cost.set(1, 1);
  cost.set(5, 1);
  cost.set(10, 1);
  return cost;
}
function getMin(acc) {
  let cost = init();
  let c = 1;
  while (c <= acc) {
    let min = Number.MAX_VALUE;
    if (c - 1 >= 0) min = Math.min(min, cost.get(c - 1) + 1);
    if (c - 5 >= 0) min = Math.min(min, cost.get(c - 5) + 1);
    if (c - 10 >= 0) min = Math.min(min, cost.get(c - 10) + 1);
    cost.set(c, min);
    ++c;
  }
  return cost.get(acc);
}
