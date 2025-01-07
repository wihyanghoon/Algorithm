function solution(s) {
    var answer = '';
    // 짝수일때 실행할 로직
    if(s.length % 2 === 0) {
        const index = Math.ceil(s.length / 2);
        return answer = s[index - 1]+s[index];
    // 홀수일때 실해할 로직
    } else {
        const index = Math.floor(s.length / 2);
        return answer = s[index];
    }
}