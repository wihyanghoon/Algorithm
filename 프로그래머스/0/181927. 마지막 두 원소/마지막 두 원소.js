function solution(num_list) {
    var answer = [...num_list]
    var lastItem = answer[answer.length - 1];
    var before = answer[answer.length - 2];
    
    if(lastItem > before) {
        answer.push(lastItem - before)
    } else {
        answer.push(lastItem * 2)
    }

    return answer;
}