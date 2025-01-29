function solution(n, numlist) {
    var answer = [];
    
    for(const number of numlist) {
        if(number % n === 0) answer.push(number)
    }
    
    return answer
}