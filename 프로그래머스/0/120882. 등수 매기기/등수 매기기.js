function solution(score) {
    let sum = score.map((value) => value[0] + value[1])
    let sorting = [...sum].sort((a, b) => b - a)
    
    console.log("sum", sum)
    console.log("sorting", sorting)
    
    return sum.map((value) => sorting.indexOf(value) + 1)
}