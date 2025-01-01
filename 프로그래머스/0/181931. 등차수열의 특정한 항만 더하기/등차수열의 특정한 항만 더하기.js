function solution(a, d, included) {
    var answer = 0;
    var list = [];
    
    for(let i = 0; i < included.length; i++) {
        list[i] = a;
        a += d;
    }
    
    included.forEach((item, index)=>{
        if(item) {
            answer += list[index]
        }
    })
    
    //리듀서로 풀어보자
    // return included.reduce((sum, flag, index)=>{
    //     return flag ? sum + a + d * index : sum
    // }, 0)
    return answer;
}