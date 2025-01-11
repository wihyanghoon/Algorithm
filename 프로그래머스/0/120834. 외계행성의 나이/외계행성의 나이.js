function solution(age) {
    var answer = '';
    
    var char = "abcdefghijklmnopqrstuvwxyz"
    var ageStr = age.toString().split("");
    
    for (const index in ageStr) {
        answer+= char[ageStr[index]]
    }
    
    return answer;
}