module.exports = {
  Name: 'heap order',
  TestCaseAcc: 1000,
  Init() {
    const data = Array.from({ length: 5 }, (v, k) => Math.floor(Math.random() * 155000));

    return { data };
  },
  Exec(ctx) {
    const originData = ctx.data;
    heapSort(originData);
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
let len = 0;
function heapSort(arr) {
  len = arr.length;
  buildHeap(arr);
  for (let i = len - 1; i > 0; --i) {
    swap(arr, 0, i);
    buildHeap(arr, 0);
    --len;
  }
}
function buildHeap(arr) {
  for (let i = Math.floor(len / 2); i > 0; --i) {
    adjustHeap(arr, i - 1);
  }
}
function adjustHeap(arr, i) {
  let left = 2 * i + 1,
    right = 2 * i + 2;
  let lagest = i;
  if (left < len && arr[left] > arr[lagest]) {
    lagest = left;
  }
  if (right < len && arr[right] > arr[lagest]) {
    lagest = right;
  }
  if (lagest != i) {
    swap(arr, i, lagest);
    adjustHeap(arr, lagest);
  }
}
function swap(arr, i, j) {
  let t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}
