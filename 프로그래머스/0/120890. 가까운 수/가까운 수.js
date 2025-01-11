function solution(array, n) {
    array.sort((a, b) => a - b);
    var max = Infinity;    
    var answer = 0;
    
    for (let num of array) {
        if(Math.abs(n - num) < max) {
            max = Math.abs(n - num);
            answer = num
        }
    }
    return answer;
}