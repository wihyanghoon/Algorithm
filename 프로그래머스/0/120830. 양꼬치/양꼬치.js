function solution(n, k) {
    var count = Math.floor(n/10)
    var meet = 12000 * n;
    var drink = (k - count) * 2000;

    return meet + drink;
}