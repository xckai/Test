module.exports = {
  Name: 'insert order',
  Init() {
    const data = Array.from({ length: 10000 }, (v, k) => Math.floor(Math.random() * 100000));

    return { data };
  },
  Exec(ctx) {
    const originData = ctx.data;
    for (let i = 1; i < originData.length; ++i) {
      let t = originData[i];
      let j = i - 1;
      for (j; j >= 0 && originData[j] > t; --j) {
        originData[j + 1] = originData[j];
      }
      originData[j + 1] = t;
    }
    return ctx;
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
