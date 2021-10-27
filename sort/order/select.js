module.exports = {
  Name: "select order",
  Init() {
    const data = Array.from({ length: 10000 }, (v, k) =>
      Math.floor(Math.random() * 1000)
    );

    return { data };
  },
  Exec(ctx) {
    const originData = ctx.data;
    for (let i = 0; i < originData.length - 1; ++i) {
      let minEleIdx = i;
      for (let j = i + 1; j < originData.length; ++j) {
        if (originData[minEleIdx] > originData[j]) {
          minEleIdx = j;
        }
      }
      if (i != minEleIdx) {
        let t = originData[i];
        originData[i] = originData[minEleIdx];
        originData[minEleIdx] = t;
      }
    }
    return ctx;
  },
  Check(ctx) {
    const { data } = ctx;
    for (let i = 0; i < data.length - 1; ++i) {
      if (data[i] > data[i + 1]) {
        throw new Error("Error Result");
      }
    }
  },
};
