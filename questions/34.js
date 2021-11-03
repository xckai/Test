module.exports = {
  Name: 'firstLastPosition',
  TestCaseAcc: 1,
  Init() {
    return { data: [1, 3] };
  },
  Exec(ctx) {
    return {
      data: getInterval(ctx.data, 4)
    };
  },
  Check(ctx) {
    console.log();

    console.log(ctx.data);
  }
};
function getInterval(arr, target) {
  if (arr.length < 1) {
    return [-1, -1];
  }
  let start = findMinLessThanTarget(arr, target);
  if (start == -1) {
    return [-1, -1];
  } else {
    return [start, findLatestMoreThanTarget(arr, target)];
  }
}
function findMinLessThanTarget(arr, target) {
  let foundTarget = false;
  let left = 0,
    right = arr.length - 1;
  if (arr[0] > target) {
    return -1;
  }
  if (arr[0] == target) {
    return 0;
  }
  while (right >= left) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] > target) {
      right = mid - 1;
    } else if (arr[mid] == target) {
      foundTarget = true;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return foundTarget ? left : -1;
}
function findLatestMoreThanTarget(arr, target) {
  let foundTarget = false;
  let left = 0,
    right = arr.length - 1;
  if (arr[right] < target) {
    return -1;
  }
  if (arr[right] == target) {
    return right;
  }
  while (right >= left) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] > target) {
      right = mid - 1;
    } else if (arr[mid] == target) {
      foundTarget = true;
      left = mid + 1;
    } else {
      left = mid + 1;
    }
  }
  return foundTarget ? right : -1;
}
