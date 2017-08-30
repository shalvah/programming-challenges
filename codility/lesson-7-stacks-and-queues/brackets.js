function solution(S) {
    let counterparts = {
        '}': '{',
        ')': '(',
        ']': '['
    };
    let stack = [];
    
    // we check the type of each bracket in turn;
    // if it is an 'opener', we add it to the stack
    // if it is a 'closer, we pop from the stack ONLY if its opener is on top,
    // otherwise the brackets are not properly paired
    for (let i = 0; i < S.length; i++) {
        if (S[i] in counterparts) {
            if (stack.slice(-1)[0] === counterparts[S[i]]) stack.pop();
            else return 0;
        }
        else stack.push(S[i]);
    }
    return  (stack.length ? 0 : 1);
}`
