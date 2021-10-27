module.exports = {
  Name: 'MergekSortedLists',
  TestCaseAcc: 1,
  Init() {
    let l1 = new ListNode(1);
    l1.next = new ListNode(4,new ListNode(5));
        let l2 = new ListNode(1);
    l2.next = new ListNode(3,new ListNode(4));
        let l3 = new ListNode(2);
    l3.next = new ListNode(6);
    return { data:[l1,l2,l3] };
  },
  Exec(ctx) {
    return {
      data: mergeSortedv2(ctx.data)
   }
  },
  Check(ctx) {
    let n = ctx.data;
    while (n) {
            console.log()
      console.log(n.val)
      n = n.next;
   }
  }
};
function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
 
function mergeSorted(numbs) {
  let start = crtNode = new ListNode();
  while (numbs.reduce((p, c) => p || !!c, false)) {
    let minNode = null;
    let minIdx = -1;
    numbs.forEach((node, i) => {
      if (!!node) {
        if (minNode == null || minNode.val > node.val) {
          minNode = node;
          minIdx = i;
        }
      }
    });
    crtNode.next = minNode;
    crtNode = minNode;
    numbs[minIdx] = minNode.next;
  }
  return start.next;
}

function mergeSortedv2(numbs) {
  let start = crtNode = new ListNode();
  numbs = numbs.sort((n1, n2) => {
    if (n1 === null) {
      return 1;
    }
    if (n2 === null) {
      return -1;
    }
    return n1.val - n2.val;
  });
  while (numbs[0]) {
    crtNode.next = numbs[0];
    crtNode = crtNode.next;
    numbs[0] = numbs[0].next;
    dividedOrder(numbs);
 }
  return start.next;
}

function dividedOrder(numbs) {
  let target = numbs[0];
  let left = 1, right = numbs.length - 1;
  let mid = Math.floor((right + left) / 2);
  while (right > left) {
    if (smaller(numbs[mid], target)) {
      left = mid+1;
    } else {
      right = mid-1;
    }
    mid = Math.floor((right + left) / 2);
  }
  for (let i = 0; i < left; ++i){
    numbs[i] = numbs[i + 1];
  }
  if (smaller(numbs[left], target)) {
    numbs[left] = target;
  } else {
    numbs[left - 1] = target;
  }
}
function smaller(n1, n2) {
   if (n1 === null) {
     return false;;
    }
    if (n2 === null) {
      return true;
    }
  return n1.val - n2.val < 0;
}