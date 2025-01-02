function solution(n) {
    var answer = 0;
    
    for(let i = 1; i <= n; i++) {
        // 조건에 만족하면 바로 반복문을 빠져나온다.
        // 주어진 n의 숫자가 클 경우를 대비하여 반복문이 종료되게함.
        if(n % i === 1) {
            answer = i;
            break;
        }
    }
    
    return answer;
}