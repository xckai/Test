module.exports = {
  Name: 'rain',
  TestCaseAcc: 1000,
  Init() {
    const data = Array.from({ length: 100000 }, (v, k) => Math.floor(Math.random() * 1000000));

    return { data };
  },
  Exec(ctx) {
    const originData = ctx.data;
    calcWaterArea(originData);
    return ctx;
  },
  Check(ctx) {
    const { data } = ctx;
    for (let i = 0; i < data.length - 1; ++i) {
      if (data[i] > data[i + 1]) {
        //  throw new Error('Error Result');
      }
    }
  }
};
function getMaxIdx(arr) {
  let max = -1;
  let idx = -1;
  for (let i = 0; i < arr.length; ++i) {
    max > arr[i] ? null : ((max = arr[i]), (idx = i));
  }
  return idx;
}
function getBoundaryUpDirection(arr, maxIdx) {
  let start = 0;
  let lBoundary = arr[start];
  let res = [];
  for (let i = start + 1; i <= maxIdx; ++i) {
    if (arr[i] >= lBoundary) {
      lBoundary = arr[i];
      i - 1 > start ? res.push([start, i]) : null;
      start = i;
    }
  }
  return res;
}
function getBoundaryDownDirection(arr, maxIdx) {
  let start = arr.length - 1;
  let rBoundary = arr[start];
  let res = [];
  for (let i = start - 1; i >= maxIdx; --i) {
    if (arr[i] >= rBoundary) {
      i + 1 < start ? res.push([i, start]) : null;
      start = i;
      rBoundary = arr[start];
    }
  }
  return res;
}
function calcArea(arr, from, to) {
  if (to - from <= 1) {
    return 0;
  }
  let rectangleArea = Math.min(arr[from], arr[to]) * (to - from - 1);
  let solidArea = 0;
  for (let i = from + 1; i < to; ++i) {
    solidArea += arr[i];
  }
  return rectangleArea - solidArea;
}
function calcWaterArea(arr) {
  let maxIdx = getMaxIdx(arr);
  let leftArea = getBoundaryUpDirection(arr, maxIdx)
    .map((item) => calcArea(arr, item[0], item[1]))
    .reduce((p, v) => p + v, 0);
  let rightArea = getBoundaryDownDirection(arr, maxIdx)
    .map((item) => calcArea(arr, item[0], item[1]))
    .reduce((p, v) => p + v, 0);
  return leftArea + rightArea;
}
