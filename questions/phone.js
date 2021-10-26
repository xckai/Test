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
function getLettles(str) {
  if (!str) {
    return []
  }
  let queue  = ofStr(str);
  let res =[]
  while(!allCompleted(queue)){
    res.push(queue.map(q => q.lettels[q.crtIdx]).join(""));
    for(let i =0 ; i < queue.length; ++i ){
        if(queue[i].crtIdx < queue[i].lettels.length -1){
          queue[i].crtIdx ++;
          break;
        } else {
          let j = i+1;
          for (j; j < queue.length; ++j){
            if (queue[j].crtIdx < queue[j].lettels.length -1) {
              queue[j].crtIdx++;
              break;
            }
          }
          if (j >= queue.length) {
            break;
          }
          for (let t = 0; t < j; ++t){
            queue[t].crtIdx = 0;
          }
          break;
        }
    }
  }
  res.push(queue.map(q=>q.lettels[q.crtIdx]).join(""));
  return res;
}
function getLettlesv2(str) {
  if (!str) {
    return []
  }
  let queue  = ofStr(str);
  let res =[]
  while(!allCompleted(queue)){
    res.push(queue.map(q => q.lettels[q.crtIdx]).join(""));
    for(let i =0 ; i < queue.length; ++i ){
        if(queue[i].crtIdx < queue[i].lettels.length -1){
          queue[i].crtIdx ++;
          break;
        } else {
          let j = i+1;
          for (j; j < queue.length; ++j){
            if (queue[j].crtIdx < queue[j].lettels.length -1) {
              queue[j].crtIdx++;
              break;
            }
          }
          if (j >= queue.length) {
            break;
          }
          for (let t = 0; t < j; ++t){
            queue[t].crtIdx = 0;
          }
          break;
        }
    }
  }
  res.push(queue.map(q=>q.lettels[q.crtIdx]).join(""));
  return res;
}