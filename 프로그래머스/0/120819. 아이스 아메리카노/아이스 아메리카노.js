function solution(money) {
    var coffeePrice = 5500;
    var answer = [];
    answer[0] = Math.floor(money / coffeePrice)
    answer[1] = money - (answer[0] * coffeePrice)
    return answer;
}