function solution(numbers) {
    var answer = 0;
    
    // 배열의 원소값을 순회
    // 배열의 각각의 원소값을 총합을 구합니다.
    answer = numbers.reduce((a, b) => a + b, 0)
    
    return answer / numbers.length;
}