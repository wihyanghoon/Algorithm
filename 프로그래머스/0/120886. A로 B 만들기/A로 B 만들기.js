function solution(before, after) {
    // 문자열을 정렬한다
    var str1 = before.split("").sort().join("")
    var str2 = after.split("").sort().join("")
    
    // 두문자열이 동일한지 비교
    // 동일하다면 구성요소가 같다는 의미
    if(str1 === str2) {
        return 1
    } else {
        return 0
    }
}