module.exports = {
  Name: 'bubble order',
  Init() {
    const data = Array.from({ length: 10000 }, (v, k) => Math.floor(Math.random() * 1000));

    return { data };
  },
  Exec(ctx) {
    const originData = ctx.data;
    let isOrdered = true;
    for (let i = 0; i < originData.length - 1; ++i) {
      for (let j = 0; j < originData.length - 1 - i; ++j) {
        if (originData[j] > originData[j + 1]) {
          let t = originData[j];
          originData[j] = originData[j + 1];
          originData[j + 1] = t;
          isOrdered = false;
        }
      }
      if (isOrdered) {
        break;
      }
    }
    return ctx;
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
function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 相邻元素两两对比
        var temp = arr[j + 1]; // 元素交换
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
