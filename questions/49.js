module.exports = {
  Name: 'groupAnagrams',
  TestCaseAcc: 1,
  Init() {
    return { data: [''] };
  },
  Exec(ctx) {
    return {
      data: run(ctx.data)
    };
  },
  Check(ctx) {
    console.log();

    console.log(ctx.data);
  }
};
function run(arr) {
  let res = new Map();
  arr.forEach((element) => {
    let key = Array.from(element).sort().join('');
    let item = res.get(key);
    if (item == undefined) {
      item = [element];
      res.set(key, item);
    } else {
      item.push(element);
    }
  });
  let r = [];
  res.values();
  for (let [key, value] of res) {
    r.push(value);
  }
  return r;
}
