function solution(my_string) {
    var answer = '';
    for(const char of my_string) {
        // 소문자인지 확인
        if(char.toLowerCase() === char) {
            answer += char.toUpperCase()
        } else {
            answer += char.toLowerCase()
        }
    }
    return answer;
}