module.exports = {
  TestCaseAcc: 1,

  Name: 'sum',
  Init() {
    let data = [-1, 0, 1, 2, -1, -4];
    return { data };
  },
  Exec(ctx) {
    const originData = ctx.data;
    return {
      data: getThreeSumTuple(originData)
    };
    return ctx;
  },
  Check(ctx) {
    console.log();
    console.log(ctx.data);
  }
};
function initMap(arr) {
  let cache = new Map();
  arr.forEach((v, i) => {
    cache.set(v, i);
  });
  return cache;
}
function getThreeSumTuple(arr) {
  if (arr.length < 3) return [];
  arr = arr.sort();
  if (arr[0] > 0) {
    return [];
  }
  let res = [];
  let cache = initMap(arr);
  for (let i = 0; i < arr.length - 2; ++i) {
    for (let j = i + 1; j < arr.length - 1; ++j) {
      let target = -(arr[i] + arr[j]);
      let item = cache.get(target);
      if (item != undefined && item > i && item > j) {
        let t = [arr[i], arr[j], arr[item]].sort();
        if (res.findIndex((v) => v[0] === t[0] && v[1] === t[1] && v[2] === t[2]) === -1) {
          res.push(t);
        }
      }
    }
  }
  return res;
}
