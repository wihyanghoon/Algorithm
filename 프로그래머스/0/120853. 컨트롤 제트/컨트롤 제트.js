function solution(s) {
    //문자열에서 "Z" 를 만나면 "Z이전의 값을 빼준다"
    let str = s.split(" ")
    let result = 0;
    
    // 문자열을 순회
    for(let i = 0; i < str.length; i++) {
        // Z를 만날경우
        if(str[i] === "Z") {
            result -= parseInt(str[i-1])
        } else {
            result += parseInt(str[i])
        }
    }
    
    return result
}