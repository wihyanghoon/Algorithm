function solution(a, b) {
    var answer = 0;
    var num1 = String(a);
    var num2 = String(b);
    
    var case1 = Number(num1 + num2);
    var case2 = Number(num2 + num1);
    
    if(case1 >= case2) {
        answer = case1;
    } else {
        answer = case2
    }
    
    return answer;
}