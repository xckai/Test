module.exports = {
  Name: 'rain',
  TestCaseAcc: 1000,
  Init() {
    const data = Array.from({ length: 100000 }, (v, k) => Math.floor(Math.random() * 1000000));

    return { data };
  },
  Exec(ctx) {
    const originData = ctx.data;

    return {
      data: removeNthFromEnd(originData)
    };
  },
  Check(ctx) {
    let n = ctx.data;
    while (n) {
      console.log(n.val);
      n = n.next;
    }
  }
};

var removeNthFromEnd = function (head, n) {
  let p1 = null,
    p2 = head;
  while (p2 && n-- > 0) {
    p2 = p2.next;
  }
  while (p2) {
    p1 = p1 == null ? head : p1.next;
    p2 = p2.next;
  }
  if (p1 == null) {
    return head.next;
  }
  if (p1.next == null) {
    return null;
  }
  p1.next = p1.next.next;
  return head;
};
function getLength(head) {
  let i = 0;
  let node = head;
  while (node) {
    ++i;
    node = node.next;
  }
  return i;
}
