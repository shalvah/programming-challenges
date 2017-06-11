function solution(A) {
    let c = [];
    A.forEach(v => {
        let idx = c.indexOf(v);
        if (idx < 0) c.push(v);
        else c.splice(idx, 1);
    });
    return c[0];
}
