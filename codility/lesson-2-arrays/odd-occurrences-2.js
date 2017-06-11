function solution(A) {
    let c = [];
    for(let i = 0; i < A.length; i++) {
        let idx = A.indexOf(A[i], i + 1);
        if (idx < 0) return A[i];
        else A.splice(idx, 1);
    }
}
