module.exports = {
  Name: 'insert order',
  Init() {
    const data = Array.from({ length: 10000 }, (v, k) => Math.floor(Math.random() * 1000));

    return { data };
  },
  Exec(ctx) {
    const originData = ctx.data;
    for (let i = 1; i < originData.length; ++i) {
      for (let j = i; j >= 1; --j) {
        if (originData[j] < originData[j - 1]) {
          let t = originData[j];
          originData[j] = originData[j - 1];
          originData[j - 1] = t;
        } else {
          break;
        }
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
