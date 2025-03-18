function solution(n) {
    let pizzaPice = 6;

    for (let pizza = 1; ; pizza++) { // 조건 없이 무한 반복
        if ((pizza * pizzaPice) % n === 0) {
            return pizza; // 조건을 만족하는 순간 즉시 반환
        }
    }
}
