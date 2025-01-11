function solution(numbers, target) {
    let ways = 0; // 방법의 수를 저장할 변수

    function explore(index, sum) {
        // 모든 숫자를 다 사용했으면
        if (index === numbers.length) {
            // 합이 타겟과 같다면 방법의 수 증가
            if (sum === target) {
                ways++;
            }
            return;
        }

        // 현재 숫자를 더해보는 경우
        1 + 
        explore(index + 1, sum + numbers[index]);

        // 현재 숫자를 빼보는 경우
        explore(index + 1, sum - numbers[index]);
    }

    // 첫 번째 숫자부터 탐색 시작
    explore(0, 0);

    return ways; // 최종적으로 방법의 수 반환
}