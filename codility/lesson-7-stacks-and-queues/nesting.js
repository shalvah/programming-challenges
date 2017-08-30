function solution(S) {
    // we use a counter (stack) to track levels of nesting
    // increment it when we enter a new bracket
    // decrement when we close a bracket
    // The counter should be 0 at the end if all went well
    let stack = 0;
    for (let i = 0; i < S.length; i++) {
        if (S[i] === '(') stack++;
        else stack--;
        // early return -- to catch cases like )()(
        if (stack < 0) return 0;
    }
    return  (stack ? 0 : 1);
}
