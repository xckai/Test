module.exports = {
  Name: 'mergev2 order',
  TestCaseAcc: 1000,

  Init() {
    const data = Array.from({ length: 100000 }, (v, k) => Math.floor(Math.random() * 155000));

    return { data };
  },
  Exec(ctx) {
    const originData = ctx.data;
    return {
      data: mergerOrder(originData)
    };
  },
  Check(ctx) {
    const { data } = ctx;
    for (let i = 0; i < data.length - 1; ++i) {
      if (data[i] > data[i + 1]) {
        console.log(data);
        throw new Error('Error Result');
      }
    }
  }
};
function mergerOrder(arr) {
  let span = 1;
  while (span < arr.length) {
    let res = [];
    for (let i = 0; i < arr.length; i += span * 2) {
      let left = arr.slice(i, span);
      let right = arr.slice(i + span, i + 2 * span);
      res.concat(merge(left, right));
    }
    arr = res;
  }
  return arr;
}
function merge(left, right) {
  var result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length > 0) {
    result.push(left.shift());
  }
  while (right.length > 0) {
    result.push(right.shift());
  }
  return result;
}
