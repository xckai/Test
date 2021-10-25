module.exports = {
  TestCaseAcc: 1000,

  Name: 'ecoo',
  Init() {
    const data =
      'okfzopfdxngrcukpqwmgyfbwzkqegoglsqszdihswhcnwaajuiagxscrwoicsdvyowbowaddignjgsjrhhhookusgnykutrkpogmvruwdkpjucslsoluhnooysjichvobriksbanovvynfwtooygdtflnchtgcycjiziytrhsomevozdxxbiwiuxrhxtyefogphgavlhbvdjpcosexyrmphcyuhqymnzkngqyitzekwimveydjrxkhvhckqcjetpmhxzisdlkhmotwcgejllzdmfwrbpzuxcawgamamkziewwqnxpvyhvmzulivwrngrsnarsmeunbpbnnvvlxllvniskaerpawflwfdozfsmovvjtymsgnvmfepidyffwjxpvpgwceukgfplqcyccejatqqmefquirgztnyawkruasuitnjldxgmmqzzvwltetjyenbicgabtnkpfdcanggcensptcgyyygnkbvcgmvzichisofakajqtsfogqewegawcjtylxavxdxdznzyxyvvupnwfxogyjmbayeminbzthyidymnmuoevrgfbdpodbdrznmosuispnmimrglgrkdrdsjmyacfmuntvgpjaginmyknawgonibhifpyhqoswyefidrtsqgwqviseayzxqwgelgtnvxlrdhpnuhxhianiqjiyygagwwmyklszbyhcykhejijhnfmrsagsbfthmzmzractm';
    return { data };
  },
  Exec(ctx) {
    const originData = ctx.data;
    return {
      data: getLogestOne(originData)
    };
    return ctx;
  },
  Check(ctx) {
    return ctx.data === 'nbpbn';
    console.log();
    console.log(ctx.data);
  }
};
function getLogestOne(str) {
  if (str.length < 2) {
    return str;
  }
  let cache = Array.from({ length: str.length }, (v, k) => Array.from({ length: str.length }));
  function isEncoo(str, start, end) {
    if (start == end) {
      return true;
    }
    while (end > start) {
      if (str[start] != str[end]) {
        cache[start][end] = false;
        return false;
      }
      ++start;
      --end;
      if (cache[start][end] === false) {
        return false;
      }
    }
    return true;
  }
  let res = str[0];
  for (let i = 0; i < str.length; ++i) {
    for (let j = str.length - 1; j > i; --j) {
      if (j - i + 1 > res.length && isEncoo(str, i, j)) {
        res = str.substring(i, j + 1);
      }
    }
  }
  return res;
}
