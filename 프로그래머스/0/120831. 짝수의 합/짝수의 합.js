function solution(n) {
    var answer = 0;
    
    //n까지의 순회
    for(let i = 1; i <= n; i++) {
        // 짝수를 찾아 answer에 누적산
        if(i % 2 === 0) {
            answer += i
        }
    }
    
    return answer;
}