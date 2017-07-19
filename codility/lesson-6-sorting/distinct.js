function solution(A) {
    let n = Object.create(null);
    A.forEach(i => n[i] = 1);
    return Object.keys(n).length;
}
