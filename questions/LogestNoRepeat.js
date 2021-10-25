module.exports = {
  TestCaseAcc: 1,

  Name: 'LogestNoRepeat',
  Init() {
    const data = '  sfas22';
    return { data };
  },
  Exec(ctx) {
    const originData = ctx.data;
    return {
      data: getLongest(originData)
    };
    return ctx;
  },
  Check(ctx) {
    console.log();
    console.log(ctx.data);
  }
};
function getLongest(str) {
  let cache = new Map();
  function isExist(start, crtIdx, target) {
    let cacheItem = cache.get(target);
    if (cacheItem != undefined) {
      cache.set(target, crtIdx);
      if (cacheItem >= start) {
        return cacheItem;
      }
    } else {
      cache.set(target, crtIdx);
    }
    return -1;
  }

  let crtStart = 0,
    maxLength = 0;
  if (str.length < 2) {
    return str.length;
  }
  for (let i = 0; i < str.length; ++i) {
    let duplateIdx = isExist(crtStart, i, str[i]);
    if (duplateIdx != -1) {
      maxLength = Math.max(maxLength, i - crtStart);
      crtStart = duplateIdx + 1;
    } else {
      maxLength = Math.max(maxLength, i - crtStart + 1);
    }
  }
  return maxLength;
}
