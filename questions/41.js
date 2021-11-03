module.exports = {
  Name: 'firstmissingint',
  TestCaseAcc: 1,
  Init() {
    return { data: [-1] };
  },
  Exec(ctx) {
    return {
      data: getMinInt(ctx.data)
    };
  },
  Check(ctx) {
    console.log();

    console.log(ctx.data);
  }
};
function initArr(arr) {
  let l = 0,
    r = arr.length - 1,
    noZeroIdxFrom = r;
  while (r > l) {
    while (arr[l] > 0 && r > l) {
      l++;
    }
    while (arr[r] < 0 && r > l) {
      r--;
    }
    noZeroIdxFrom = l;
    swap(arr, r, l);
    r--;
    l++;
    if (r == l) {
      noZeroIdxFrom = arr[l] > 0 ? l : noZeroIdxFrom;
    }
  }
  return noZeroIdxFrom;
}
function getMinInt(arr) {
  let crtLength = initArr(arr);
  let isInit = false;
  function PopMin() {
    function getHeapedNode(arr) {
      for (let i = Math.floor(crtLength / 2); i >= 0; --i) {
        adjustHeapNode(arr, i);
      }
      isInit = true;
      return arr;
    }
    function adjustHeapNode(arr, i) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let minIdx = i,
        minVal = arr[i];
      let len = crtLength;
      if (left <= len && minVal > arr[left]) {
        minIdx = left;
        minVal = arr[left];
      }
      if (right <= len && minVal > arr[right]) {
        minIdx = right;
        minVal = arr[right];
      }
      if (minIdx != i) {
        swap(arr, i, minIdx);
        adjustHeapNode(arr, minIdx);
      }
    }
    if (!isInit) {
      getHeapedNode(arr);
      swap(arr, 0, crtLength);
      return arr[crtLength--];
    } else {
      adjustHeapNode(arr, 0);
      swap(arr, 0, crtLength);
      return arr[crtLength--];
    }
  }
  let lastInt = 0;
  while (crtLength >= 0) {
    let v = PopMin();
    if (v > 0) {
      if (v - lastInt > 1) {
        return lastInt + 1;
      } else {
        lastInt = v;
      }
    }
  }
  return lastInt + 1;
}

function swap(arr, i, j) {
  let t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}
