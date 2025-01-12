function solution(my_string, n) {
    var answer = '';
    
    for(const spell of my_string) {
        answer += spell.repeat(n)
    }
    
    return answer;
}