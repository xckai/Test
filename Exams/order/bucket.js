const fast = require('./fast');
const mergev2 = require('./mergev2');

module.exports = {
  Name: 'bucket order',
  TestCaseAcc: 1000,
  Init() {
    const data = Array.from({ length: 100000 }, (v, k) => Math.floor(Math.random() * 100000));

    return { data };
  },
  Exec(ctx) {
    const originData = ctx.data;

    return {
      data: bucketSort(originData)
    };
  },
  Check(ctx) {
    const { data } = ctx;
    for (let i = 0; i < data.length - 1; ++i) {
      if (data[i] > data[i + 1]) {
        throw new Error('Error Result');
      }
    }
  }
};
function bucketSort(arr) {
  let minValue = Math.min.apply(arr);
  let maxValue = Math.max.apply(arr);
  if (maxValue == minValue) {
    return arr;
  }
  let bucketNum = 1;
  let buckets = [];
  let span = Math.ceil((maxValue - minValue) / bucketNum);
  for (let i = 0; i < arr.length; ++i) {
    let bIndex = Math.floor((arr[i] - minValue) / span);
    if (buckets[bIndex] == undefined) {
      buckets[bIndex] = [arr[i]];
    } else {
      buckets[bIndex].push(arr[i]);
    }
  }
  for (let j = 0; j < bucketNum; ++j) {
    if (buckets[j]) {
      mergev2.Exec(buckets[j]);
    }
  }
  return buckets.reduce((p, n) => {
    if (n) {
      return p.concat(n);
    }
  }, []);
}
