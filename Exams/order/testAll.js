const insert = require("./insert");
const select = require("./select");
const bubble = require("./bubble");

module.exports = {
  TestCaseAcc: 1000,
  Init() {
    const data1 = Array.from({ length: 10000 }, (v, k) =>
      Math.floor(Math.random() * 100000)
    );
    const data2 = Array.from({ length: 10000 }, (v, k) => k);
    const data3 = Array.from({ length: 10000 }, (v, k) => 10000 - k);
    let rand = Math.random();
    return { data: rand > 0.95 ? data2 : rand > 0.05 ? data1 : data3 };
  },
  Execs: [bubble, select, insert],
  Check(ctx) {
    const { data } = ctx;
    for (let i = 0; i < data.length - 1; ++i) {
      if (data[i] > data[i + 1]) {
        throw new Error("Error Result");
      }
    }
  },
};
