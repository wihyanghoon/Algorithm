function solution(phone_number) {
    const answer = phone_number.split("").reverse();
    
    for(let i = 0; i < answer.length; i++) {
        if(i > 3) {
            answer[i] = "*"
        }
    }
    
    const str = answer.reverse().join("");
    
    return str;
}