const insert = require('./insert');

module.exports = {
  TestCaseAcc: 1000,
  Init() {
    const data1 = Array.from({ length: 10000 }, (v, k) => Math.floor(Math.random() * 1000));
    const data2 = Array.from({ length: 10000 }, (v, k) => k);
    const data3 = Array.from({ length: 10000 }, (v, k) => 10000 - k);
    let rand = Math.random();
    return { data: rand > 0.7 ? data2 : rand > 0.4 ? data1 : data3 };
  },
  Execs: [
    {
      Name: 'bubble order ',
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
      }
    },
    {
      Name: 'select order ',
      Exec(ctx) {
        const originData = ctx.data;
        for (let i = 0; i < originData.length - 1; ++i) {
          let crt = originData[i];
          for (let j = i + 1; j < originData.length; ++j) {
            if (crt > originData[j]) {
              originData[i] = originData[j];
              originData[j] = crt;
              crt = originData[i];
            }
          }
        }
        return ctx;
      }
    },
    {
      Name: 'select order v2',
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
      }
    },
    insert
  ],
  Check(ctx) {
    const { data } = ctx;
    for (let i = 0; i < data.length - 1; ++i) {
      if (data[i] > data[i + 1]) {
        throw new Error('Error Result');
      }
    }
  }
};
