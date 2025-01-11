function solution(array, height) {
    var answer = 0;
    // 배열을 순회합니다.
    for(const value of array) {
        // 주어진 키값 보다 큰 수가 있는경우 answer에 카운팅합니다.
        if(value > height) answer++;
    }
    return answer;
}