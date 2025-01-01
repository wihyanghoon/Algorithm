function solution(my_string, overwrite_string, s) {
    // 문자열을 배열로 변환
    var answer = [...my_string];
    
    // overwrite_string의 문자들을 my_string에 덮어쓰기
    for (let j = 0; j < overwrite_string.length; j++) {
        answer[s + j] = overwrite_string[j]; // 덮어쓸 위치는 s + j
    }
    
    // 배열을 다시 문자열로 변환 후 반환
    return answer.join('');
}
