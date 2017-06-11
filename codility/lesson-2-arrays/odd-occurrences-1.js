function solution(A) {
   return A.reduce((p, c) => {
     let idx = p.indexOf(c);
     if (idx > -1) p.splice(idx, 1);
     else p.push(c);
     return p;
   }, [])[0];
}
