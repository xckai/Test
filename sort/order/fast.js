module.exports = {
  Name: 'fast order',
  TestCaseAcc: 1000,
  Init() {
    const data = Array.from({ length: 100000 }, (v, k) => Math.floor(Math.random() * 155000));

    return { data };
  },
  Exec(ctx) {
    const originData = ctx.data;
    fastOrder(originData);
    return {
      data: originData
    };
  },
  Check(ctx) {
    const { data } = ctx;
    for (let i = 0; i < data.length - 1; ++i) {
      if (data[i] > data[i + 1]) {
        console.log(data);
        throw new Error('Error Result');
      }
    }
  }
};
function fastOrder(arr) {
  let stack = [0, arr.length - 1];
  let stackIdx = 0;
  while (stackIdx < stack.length) {
    order(arr, stack[stackIdx++], stack[stackIdx++], stack);
  }

  return;
}
function order(arr, begin, end, stack) {
  if (arr.length < 1) {
    return -1;
  }
  if (begin >= end) {
    return -1;
  }
  let baseValue = arr[begin];
  let crtIdx = begin + 1;
  for (let i = begin + 1; i <= end; ++i) {
    if (arr[i] < baseValue) {
      swap(arr, i, crtIdx++);
    }
  }
  swap(arr, begin, --crtIdx);
  if (crtIdx > begin) {
    stack.push(begin);
    stack.push(crtIdx - 1);
  }
  if (crtIdx < end) {
    stack.push(crtIdx + 1);
    stack.push(end);
  }
  return crtIdx;
}
function swap(arr, left, right) {
  let t = arr[left];
  arr[left] = arr[right];
  arr[right] = t;
}
