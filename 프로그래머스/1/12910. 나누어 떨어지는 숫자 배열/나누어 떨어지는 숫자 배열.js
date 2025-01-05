function solution(arr, divisor) {
    var answer = [];
    
    for (const item of arr) {
        if(item % divisor === 0) {
            answer.push(item);
        }
    }
    
    answer.sort((a, b) => a - b);
    
    if(answer.length === 0) {
        return answer = [-1];
    }
    return answer;
}