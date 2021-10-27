const progressBar = new (require('./progress_bar'))('正在执行', 25);
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
    const memoryInfos = [];
    let sampleCostRes = {};
    let ctx = initFn();
    function doExecutor() {
      let tCtx = JSON.parse(JSON.stringify(ctx));
      let startTime = getNowMilliSecond();
      const result = exec(tCtx);
      let cost = getNowMilliSecond() - startTime;
      check(result);
      return cost;
    }
    for (let i = 0; i < sampleAcc; ++i) {
      progressBar.render({ completed: i + 1, total: sampleAcc });
      ctx = initFn();
      if (examPkg.Exec != null) {
        ctx.Name = examPkg.Name;
        sampleCostRes[examPkg.Name] = sampleCostRes[examPkg.Name] == null ? [] : sampleCostRes[examPkg.Name];
        exec = examPkg.Exec;
        sampleCostRes[examPkg.Name].push(doExecutor());
      } else if (execs != null) {
        execs.forEach((instance) => {
          ctx.Name = instance.Name;
          sampleCostRes[instance.Name] = sampleCostRes[instance.Name] == null ? [] : sampleCostRes[instance.Name];
          exec = instance.Exec;
          sampleCostRes[instance.Name].push(doExecutor());
        });
      }
      memoryInfos.push(process.memoryUsage());
    }
    progressBar.clear();
    for (let name in sampleCostRes) {
      let res = sampleCostRes[name];
      console.log(`${name}平均耗时： ${res.reduce((p, c) => p + c) / res.length} ms, 稳定性标准差：${standardDeviation(res, true)} 共 ${sampleAcc}条测试`);
    }
    console.log(
      `平均内存占用： ${(memoryInfos.map((m) => m.heapTotal).reduce((p, c) => p + c) / memoryInfos.length / 1024 / 1024).toFixed(2)} MB  Heap,
      ${(memoryInfos.map((m) => m.heapUsed).reduce((p, c) => p + c) / memoryInfos.length / 1024 / 1024).toFixed(2)} MB HeapUsed,
      ${(memoryInfos.map((m) => m.rss).reduce((p, c) => p + c) / memoryInfos.length / 1024 / 1024).toFixed(2)} MB RSS, `
    );
  } catch (err) {
    console.error(err);
  }
})();
