function solution(numbers) {
    var setNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var answer = [];
    
    // setNumbers 배열을 순회하면서 각각의 숫자를
    // numbers배열이 가지고 있지 않다면 answer에 새로운 배열로 리턴
    var answer = setNumbers.filter(item => !numbers.includes(item)).reduce((a, b) => a + b, 0)
    
    return answer;
}