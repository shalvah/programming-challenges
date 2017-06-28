function solution(A) {
    let newDiff, diff = Infinity;
    let sum1 = 0; 
    let sum2 = A.reduce((a,b) => a + b, 0);
    for (let i = 1; i < A.length; i++) {
        sum1 += A[i-1];
        sum2 -= A[i-1];
        newDiff = Math.abs(sum1 - sum2);
        diff = newDiff < diff ? newDiff : diff;
    }
    return diff;
}
