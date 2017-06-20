function solution (A) {
      let n = A.length;
      if (n == 0) return 1;
      let expected = (n + 1) * (n + 2)/2;
      let sum = A.reduce((a, b) => a + b);
      return expected - sum;
 }
 
