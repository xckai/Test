module.exports = {
  Name: 'fast order',
  TestCaseAcc: 100,

  Init() {
    const data = Array.from({ length: 1000000 }, (v, k) => Math.floor(Math.random() * 1000000));

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
function fastOrder(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergerOrder(left), mergerOrder(right));
}
function order(left, right) {
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
