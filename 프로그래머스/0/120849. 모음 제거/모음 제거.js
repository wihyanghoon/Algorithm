function solution(my_string) {
    var str = ["a", "e", "i", "o", "u"]
    var answer = my_string
    
    for(const word of str) {
        if(answer.includes(word)) {
            answer = answer.split(word).join("")
        }
    }
    
    return answer;
}