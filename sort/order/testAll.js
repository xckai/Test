const insert = require('./insert');
const select = require('./select');
const bubble = require('./bubble');
const bucket = require('./bucket');

const shell = require('./shell');
const merge = require('./merge');
const mergev2 = require('./mergev2');
const fast = require('./fast');
module.exports = {
  TestCaseAcc: 100,
  Init() {
    const data1 = Array.from({ length: Math.floor(Math.random() * 100000) + 10000 }, (v, k) => Math.floor(Math.random() * 10000000));
    const data2 = Array.from({ length: 10000 }, (v, k) => k);
    const data3 = Array.from({ length: 20000 }, (v, k) => 30000 - k);
    let rand = Math.random();
    return { data: rand > 0.99 ? data2 : rand > 0.01 ? data1 : data3 };
  },
  Execs: [select, insert, shell, merge, mergev2, fast, bucket],
  Check(ctx) {
    const { data } = ctx;
    for (let i = 0; i < data.length - 1; ++i) {
      if (data[i] > data[i + 1]) {
        throw new Error(`Error Result: ${ctx.Name}`);
      }
    }
  }
};
