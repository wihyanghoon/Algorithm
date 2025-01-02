function solution(n) {
    var answer = [];
    // 숫자를 스플릿 매서드를 활용하여 문자열 배열로 만든다.
    // 배열의 메서드 revese를 활용하여 배열을 뒤집는다.
    var str = String(n).split("").reverse();
    
    
    // str 배열 순회
    for(const word of str){
        // 배열의 원소를 각각 숫자형태로 바꿈
        answer.push(Number(word));
    }
    
    return answer;
}