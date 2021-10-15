module.exports = {
  Name: 'shell order',
  TestCaseAcc: 100,
  Init() {
    const data = Array.from({ length: 1000000 }, (v, k) => Math.floor(Math.random() * 1000000));
    return { data };
  },
  Exec(ctx) {
    // return {
    //   data: shellSort(ctx.data)
    // };
    const arr = ctx.data;
    const len = arr.length;
    let span = 1,
      t;
    while (span < len / 2) {
      //动态定义间隔序列
      span = span * 5 + 1;
    }
    for (span; span > 0; span = Math.floor(span / 5)) {
      for (let i = span; i < len; i++) {
        t = arr[i];
        for (var j = i - span; j >= 0 && arr[j] > t; j -= span) {
          arr[j + span] = arr[j];
        }
        arr[j + span] = t;
      }
    }
    return ctx;
  },
  Check(ctx) {
    const { data } = ctx;
    for (let i = 0; i < data.length - 1; ++i) {
      if (data[i] > data[i + 1]) {
        throw new Error(`${i}, ${data[i]}, ${data[i + 1]}`);
      }
    }
  }
};
function shellSort(arr) {
  var len = arr.length,
    temp,
    gap = 1;
  while (gap < len / 2) {
    //动态定义间隔序列
    gap = gap * 5 + 1;
  }
  for (gap; gap > 0; gap = Math.floor(gap / 5)) {
    for (var i = gap; i < len; i++) {
      temp = arr[i];
      for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j];
      }
      arr[j + gap] = temp;
    }
  }
  return arr;
}
