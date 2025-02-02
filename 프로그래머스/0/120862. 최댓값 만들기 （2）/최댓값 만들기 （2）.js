function solution(numbers) {
    // 순서대로 정렬
    numbers.sort((a, b) => a - b)
    const n = numbers.length
    // 큰수들의 곲
    const max1 = numbers[n - 1] * numbers[n - 2]
    // 음수들의 곱
    const max2 = numbers[0] * numbers[1]
    // 양수의 곱이 큰지 음수의 곱이 큰지 확인
    const answer = Math.max(max1, max2)
    
    return answer;
}