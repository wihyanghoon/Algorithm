function solution(num) {
    var answer = 0;
    
    if (num === 1) return 0;
    
    for(let i = 1; i <= 500; i++) {
        if(i === 500) {
            // 500
            return -1
        }
        // 짝수인 경우
        if(num % 2 === 0) {
            // 주어진 값을 2로 나눈다.
            num = num / 2;
        // 홀수인 경우
        } else {
            // 주어진값을 3을 곱하고 1을 더한다.
            num = num * 3 + 1;
        }
        
        if(num === 1) return i;
    }
    
    
    return num;
}