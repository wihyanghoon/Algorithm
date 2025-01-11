function solution(order) {
    var result = order.toString().match(/[369]/g) ?? []
    return result.length;
}