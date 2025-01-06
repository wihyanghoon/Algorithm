function solution(absolutes, signs) {
    const answer = absolutes.map((item, index)=>{
       return signs[index] ? item : -item;
    }).reduce((accumulator, currentValue) => accumulator + currentValue,0)
    
    return answer;
}