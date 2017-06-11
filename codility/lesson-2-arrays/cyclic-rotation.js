function solution(A, K) {
    let l = A.length;
    K = K % l;
    if (l < 2 || K == 0) return A;
    return A.slice(l - K).concat(A.slice(0, l - K));
}
