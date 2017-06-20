function solution(A) {
  let res = 0;
  A.sort();
  let add = true;
  A.forEach(v => {
      res = (add ? res + v : res - v);
      add = !add;
  });
  return res;
}
