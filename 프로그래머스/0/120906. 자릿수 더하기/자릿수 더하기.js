function solution(n) {
    var numbers = n.toString().split("")
    var sum = numbers.reduce((a, b) => { return Number(a)+ Number(b)}, 0)
    return sum
}