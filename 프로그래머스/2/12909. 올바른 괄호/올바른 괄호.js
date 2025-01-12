function solution(s){
    var answer = true;
    var stack = [];
    
    for(let char of s) {
        if(char === "(") {
            stack.push(char);
        } else {
            if(stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.length === 0 ? true : false;
}