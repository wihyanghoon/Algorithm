function solution(price) {
    if (price >= 500000) {
        return Math.floor(price * 0.8); // 20% 할인
    } else if (price >= 300000) {
        return Math.floor(price * 0.9); // 10% 할인
    } else if (price >= 100000) {
        return Math.floor(price * 0.95); // 5% 할인
    }
    return price; // 할인 없음
}
