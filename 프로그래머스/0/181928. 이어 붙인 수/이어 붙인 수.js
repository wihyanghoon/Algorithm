function solution(num_list) {
    var answer = 0;
    var even = ""
    var odd = ""
    
    // 홀수와 짝수를 구분
    for(const num of num_list) {
        if(num % 2 === 0) {
            even += num
        } else {
            odd += num
        }
    }
    
    // 숫자 타입으로 변환
    return answer = Number(even) + Number(odd);
}