function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function revert(node) {
  let pNode = null;
  while (node != null) {
    node.pNode = pNode;
    pNode = node;
    node = node.next;
  }
  return pNode;
}
function add(n1, n2) {
  let crt = undefined,
    res = undefined;
  let popMark = false;
  while (n1 && n2) {
    let t = n1.val + n2.val;
    t = popMark ? t + 1 : t;
    if (t > 9) {
      popMark = true;
    } else {
      popMark = false;
    }
    if (crt == undefined) {
      res = crt = new ListNode(t % 10);
    } else {
      let n = new ListNode(t % 10, undefined);
      crt.next = n;
      crt = n;
    }
    n1 = n1.next;
    n2 = n2.next;
  }
  while (n1) {
    let t = popMark ? n1.val + 1 : n1.val;
    if (t > 9) {
      popMark = true;
    } else {
      popMark = false;
    }
    if (crt == undefined) {
      res = crt = new ListNode(t % 10);
    } else {
      let n = new ListNode(t % 10, undefined);
      crt.next = n;
      crt = n;
    }
    n1 = n1.next;
  }
  while (n2) {
    let t = popMark ? n2.val + 1 : n2.val;
    if (t > 9) {
      popMark = true;
    } else {
      popMark = false;
    }
    if (crt == undefined) {
      res = crt = new ListNode(t % 10);
    } else {
      let n = new ListNode(t % 10, undefined);
      crt.next = n;
      crt = n;
    }
    n2 = n2.next;
  }
  if (popMark) {
    let n = new ListNode(1, undefined);
    crt.next = n;
    crt = n;
  }
  return res;
}
