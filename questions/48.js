module.exports = {
  Name: 'imageRotated',
  TestCaseAcc: 1,
  Init() {
    return { data: [1, 3] };
  },
  Exec(ctx) {
    return {
      data: getInterval(ctx.data, 4)
    };
  },
  Check(ctx) {
    console.log();

    console.log(ctx.data);
  }
};
function swap(arrs, x1, y1, x2, y2) {
  let t = arrs[x1][y1];
  arrs[x1][y1] = arrs[x2][y2];
  arrs[x2][y2] = t;
}
function getRotatedPoint(len, x, y) {
  let x2 = len - 1 - y;
  let y2 = len - 1 - x;
  return [x2, y2];
}
function rotate(arrs) {
  let n = arrs.length;
  let ticks = Math.floor((n * n) / 2);
  for (let i = 0; i < ticks; ++i) {}
}
