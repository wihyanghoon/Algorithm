function solution(n) {
    var answer = 0;
    
    // n까지의 수를 구합니다.
    for(let i = 1; i <= n; i++) {
        // n을 i로 나눴을때 나머지가 0인 i값을 누적산
        if(n % i === 0) answer += i;
    }
    
    
    return answer;
}