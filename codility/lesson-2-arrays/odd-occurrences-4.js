function solution(A) {
   return A.reduce((p, c) => p ^ c, 0);
}
