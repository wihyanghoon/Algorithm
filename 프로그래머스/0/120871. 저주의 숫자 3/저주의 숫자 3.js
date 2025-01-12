function solution(n) {
    var answer = [];
    
    for(let i = 1; i <= 88888; i++) {
        if(i % 3 !=0 && !String(i).includes('3')) {
           answer.push(i)
        }
    }
    
    answer = answer[n-1]
    return answer;
}