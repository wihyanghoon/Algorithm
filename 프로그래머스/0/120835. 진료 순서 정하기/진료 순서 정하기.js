function solution(emergency) {
    var arr = [...emergency].sort((a, b) => b - a)
    var answer = emergency.map((v)=> arr.indexOf(v) + 1)
    
    return answer;
}