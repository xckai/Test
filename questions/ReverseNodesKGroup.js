function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
module.exports = {
  Name: 'ReverseNodesKGroup',
  TestCaseAcc: 1,
  Init() {
    let start = new ListNode(1);
    let data = [new ListNode(2), new ListNode(3), new ListNode(4)];
    data.reduce((p, c) => ((p.next = c), c), start);
    return { data: start };
  },
  Exec(ctx) {
    return {
      data: revert(ctx.data, 4)
    };
  },
  Check(ctx) {
    let n = ctx.data;
    console.log();
    while (n) {
      console.log(n.val);
      n = n.next;
    }
  }
};
function updateNodes(node) {
  let p = null;
  while (!!node) {
    node.pre = p;
    p = node;
    node = node.next;
  }
}
function swap(n1, n2) {
  let pN1 = n1.pre,
    pN2 = n2.pre;
  let nN1 = n1.next,
    nN2 = n2.next;
  if (pN1) {
    pN1.next = n2;
  }
  n2.pre = pN1;
  if (nN2) {
    nN2.pre = n1;
  }
  n1.next = nN2;
  if (nN1) {
    if (nN1 === n2) {
      n2.next = n1;
      n1.pre = n2;
      return;
    }
    nN1.pre = n2;
  }
  n2.next = nN1;
  if (pN2) {
    pN2.next = n1;
  }
  n1.pre = pN2;
}
function revert(head, n) {
  let start = new ListNode(null, head);
  updateNodes(start);
  let lNode = head,
    rNode = head;
  let i = 1;
  while (rNode != null) {
    if (i == n) {
      let tL = lNode,
        tR = rNode;
      while (tR !== tL && tR.next !== tL) {
        swap(tL, tR);
        let t = tL;
        tL = tR.next;
        tR = t.pre;
      }
      i = 1;
      lNode = lNode.next;
      rNode = lNode;
    } else {
      rNode = rNode.next;
      ++i;
    }
  }
  return start.next;
}
