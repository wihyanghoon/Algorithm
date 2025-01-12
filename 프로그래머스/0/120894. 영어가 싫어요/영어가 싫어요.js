function solution(numbers) {
    var number = ["zero","one","two","three","four","five","six","seven","eight","nine"]
    var answer = numbers
    
    for(const index in number) {
        let num = number[index]
        answer = answer.replaceAll(num, index); 
    }
    
    return parseInt(answer);
}