const path = require("path");
function getNowMilliSecond() {
  return Math.floor(Date.now());
}

var filePath = process.argv[2];

const examPkg = require(path.resolve(filePath));
const standardDeviation = (arr, usePopulation = false) => {
  const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
  const sdRes = Math.sqrt(
    arr
      .reduce((acc, val) => acc.concat((val - mean) ** 2), [])
      .reduce((acc, val) => acc + val, 0) /
      (arr.length - (usePopulation ? 0 : 1))
  );
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
      ctx = initFn();
      if (examPkg.Exec != null) {
        sampleCostRes[examPkg.Name] =
          sampleCostRes[examPkg.Name] == null
            ? []
            : sampleCostRes[examPkg.Name];
        exec = examPkg.Exec;
        sampleCostRes[examPkg.Name].push(doExecutor());
      } else if (execs != null) {
        execs.forEach((instance) => {
          sampleCostRes[instance.Name] =
            sampleCostRes[instance.Name] == null
              ? []
              : sampleCostRes[instance.Name];
          exec = instance.Exec;
          sampleCostRes[instance.Name].push(doExecutor());
        });
      }
    }
    for (let name in sampleCostRes) {
      let res = sampleCostRes[name];
      console.log(
        `${name}平均耗时： ${
          res.reduce((p, c) => p + c) / res.length
        } ms, 稳定性标准差：${standardDeviation(
          res,
          true
        )} 共 ${sampleAcc}条测试`
      );
    }

    // if (exec != null) {
    //   sampleCostRes = [];
    //   for (let i = 0; i < sampleAcc; ++i) {
    //     doExecutor();
    //   }
    //   console.log(
    //     `${examPkg.Name}平均耗时： ${
    //       sampleCostRes.reduce((p, c) => p + c) / sampleCostRes.length
    //     } ms, 稳定性标准差：${standardDeviation(
    //       sampleCostRes,
    //       true
    //     )} 共 ${sampleAcc}条测试`
    //   );
    // }
    // if (execs != null) {
    //   execs.forEach(async (instance) => {
    //     sampleCostRes = [];
    //     exec = instance.Exec;
    //     console.log(`${instance.Name} 开始 `);
    //     for (let i = 0; i < sampleAcc; ++i) {
    //       doExecutor();
    //     }
    //     console.log(
    //       `${instance.Name}平均耗时： ${
    //         sampleCostRes.reduce((p, c) => p + c) / sampleCostRes.length
    //       } ms, 稳定性标准差：${standardDeviation(
    //         sampleCostRes,
    //         true
    //       )} 共 ${sampleAcc}条测试`
    //     );
    //     await sleep(2000);
    //   });
    // }
  } catch (err) {
    console.error(err);
  }
})();
