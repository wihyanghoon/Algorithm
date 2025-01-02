function solution(num_list) {
    var answer = 0;
    
    // 모든 원소의 곱
    var cumulative = num_list.reduce((acc, current, array)=>{
        return acc * current
    })
    
    // 모든 원소의 합의 제곱
    var sum = num_list.reduce((acc, current, array)=>{
        return acc + current
    }, 0) ** 2
    
    if(cumulative < sum) {
        return answer = 1;
    }
    
    return answer;
}