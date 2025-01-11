function solution(i, j, k) {
    var answer = ""
    
    for(i; i <= j; i++) {
        answer += i
    }
    
    var result = answer.split(k).length - 1
    return result
}