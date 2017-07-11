function solution(A) {
    let min = Infinity;
    let minIndex = -1;
    A.forEach((v, i) => {
       // the slice with the minimum average must be of length 2 or 3,
       // so we calculate the averages for the 2- and 3-digit slices
       // and return the minimum
       if (A[i+1] === undefined) return;
       let avg2 = (v + A[i+1])/2;
       if (avg2 < min) {
         min = avg2;
         minIndex = i;
       }
       if (A[i+2] === undefined) return;
       let avg3 = (v + A[i + 1] + A[i+2])/3;
       if (avg3 < min) {
         min = avg3;
         minIndex = i;
       }
    });
    return minIndex;
}
