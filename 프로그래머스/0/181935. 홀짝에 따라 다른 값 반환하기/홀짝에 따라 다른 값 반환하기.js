function solution(n) {
    var answer = 0;
    var sum = 0;
    var list = []
    
    // n의 값이 홀수인지 짝수인지 확인
    var isEven = n % 2 === 0 ? true : false;
    
    console.log(isEven)
    
    // n까지의 모든 수를 배열에 담는다.
    for(let i = 0; i <= n; i++) {
        list.push(i)
    }
    
    // 배열에서 특정수만 남김
    list = list.filter((item, index)=> isEven ? item % 2 === 0 : item % 2 !== 0);
    
    // 짝수면 제곱계산 홀수면 합계계산
    list.forEach((item, index)=>{
        if(isEven) {
            answer += item ** 2
        } else {
            answer += item
        }
    })
    
    return answer;
}