const path = require('path');
function getNowMilliSecond() {
  return Math.floor(Date.now());
}

var filePath = process.argv[2];

const examPkg = require(path.resolve(filePath));
const standardDeviation = (arr, usePopulation = false) => {
  const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
  const sdRes = Math.sqrt(arr.reduce((acc, val) => acc.concat((val - mean) ** 2), []).reduce((acc, val) => acc + val, 0) / (arr.length - (usePopulation ? 0 : 1)));
  return Math.floor(sdRes);
};
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
(async function exec() {
  try {
    const initFn = examPkg.Init;
    let exec = examPkg.Exec;
    const execs = examPkg.Execs;
    const check = examPkg.Check;
    const sampleAcc = examPkg.TestCaseAcc || 1;
    let sampleCostRes = [];
    function doExecutor() {
      const ctx = initFn();
      let startTime = getNowMilliSecond();
      const result = exec(ctx);
      let cost = getNowMilliSecond() - startTime;
      sampleCostRes.push(cost);
      check(result);
    }
    if (exec != null) {
      sampleCostRes = [];
      for (let i = 0; i < sampleAcc; ++i) {
        doExecutor();
      }
      console.log(
        `${examPkg.Name}平均耗时： ${sampleCostRes.reduce((p, c) => p + c) / sampleCostRes.length} ms, 稳定性标准差：${standardDeviation(
          sampleCostRes,
          true
        )} 共 ${sampleAcc}条测试`
      );
    }
    if (execs != null) {
      execs.forEach(async (instance) => {
        sampleCostRes = [];
        exec = instance.Exec;
        for (let i = 0; i < sampleAcc; ++i) {
          doExecutor();
        }
        console.log(
          `${instance.Name}平均耗时： ${sampleCostRes.reduce((p, c) => p + c) / sampleCostRes.length} ms, 稳定性标准差：${standardDeviation(
            sampleCostRes,
            true
          )} 共 ${sampleAcc}条测试`
        );
        await sleep(1000);
      });
    }
  } catch (err) {
    console.error(err);
  }
})();
