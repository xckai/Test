module.exports = {
  Name: 'scropedAcc',
  TestCaseAcc: 1,
  Init() {
    const data = Array.from({ length: 100000 }, (v, k) => Math.floor(Math.random() * 1000000));

    return { data: 4 };
  },
  Exec(ctx) {
    const originData = ctx.data;

    return {
      data: generate(originData)
    };
  },
  Check(ctx) {
    console.log(ctx.data);
  }
};
function generate(n) {
  let cache = { 1: ['()'] };
  let crtValue = ['()'];
  if (n == 1) {
    return crtValue;
  } else {
    let i = 1;
    while (i < n) {
      cache[i++] = crtValue;
      let t = [];
      crtValue.forEach((v) => {
        t.push(`(${v})`);
      });
      let j = 1,
        k = i;
      while (i - j > 0) {
        t = t.concat(getMixinRes(cache[j], cache[i - j]));
        ++j;
      }
      crtValue = deduplate(t).sort();
    }
  }
  return crtValue;
}
function getMixinRes(arr1, arr2) {
  let res = [];
  arr1.forEach((v) => {
    arr2.forEach((v2) => {
      res.push(v + v2);
    });
  });
  return res;
}
function deduplate(arr) {
  return Array.from(new Set(arr));
}
