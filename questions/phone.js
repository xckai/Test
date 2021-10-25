module.exports = {
  TestCaseAcc: 1,

  Name: 'phone',
  Init() {
    let data = '23';
    return { data };
  },
  Exec(ctx) {
    const originData = ctx.data;
    return {
      data: getLettles(originData)
    };
    return ctx;
  },
  Check(ctx) {
    console.log();
    console.log(ctx.data);
  }
};
function initMap(arr) {
  let cache = new Map();
  arr.forEach((v, i) => {
    cache.set(v, i);
  });
  return cache;
}
const phoneMap = {
  '2':"abc",
  '3': "def",
  '4': "ghi",
  '5': "jkl",
  '6': "mno",
  '7': "pqrs",
  '8': "tuv",
  '9': "wxyz"
};
function ofStr(str){
 return Array.from(str).map(v=>({
    crtIdx:0,
    lettels: phoneMap[v]
  }));
};
function allCompleted(queue){
  return queue.reduce((p,c)=>p && c.crtIdx ==  c.lettels.length -1, true);
}
function getLettles(str){
  let queue  = ofStr(str);
  let crtIdx =0;
  // let allTick = queue.reduce((p,c)=>p &c.lettels.length, 1);
  let res =[]
  while(!allCompleted(queue)){
    res.push(queue.map(q=>q.lettels[q.crtIdx]).join(""));
    if(queue[crtIdx].crtIdx < queue[crtIdx].lettels.length -1){
      queue[crtIdx].crtIdx++;
    }else{
      for(let i =1 ; i < queue.length; ++i ){
        if(queue[i].crtIdx < queue[i].lettels.length -1){
          queue[i].crtIdx ++;
          break;
        }
      }
    }
  }
  res.push(queue.map(q=>q.lettels[q.crtIdx]).join(""));
  return res;
}