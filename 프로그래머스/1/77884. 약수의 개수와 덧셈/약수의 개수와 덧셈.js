function solution(left, right) {
    let answer = 0; // 결과 값을 저장할 변수

    // left부터 right까지 반복
    for (let i = left; i <= right; i++) {
        let count = 0; // 약수 개수를 세기 위한 변수

        // 1부터 i까지 약수를 찾음
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                count++; // 나누어 떨어지면 약수 개수 증가
            }
        }

        // 약수의 개수가 짝수인지 홀수인지에 따라 더하거나 뺌
        if (count % 2 === 0) {
            answer += i; // 짝수면 더함
        } else {
            answer -= i; // 홀수면 뺌
        }
    }

    return answer; // 최종 결과 반환
}
