function solution(n) {
    if (n < 0) return false; // 음수는 제곱수가 될 수 없음
    const sqrt = Math.sqrt(n); // 제곱근 구하기
    return Number.isInteger(sqrt) ? 1 : 2;
}