function solution(array, commands) {
    var answer = [];
    
    for(let i = 0; i < commands.length; i++) {
        let [start, end, index] = commands[i]
        let arr = array.slice(start-1, end).sort((a, b)=> a-b)
        answer.push(arr[index-1])
    }
    return answer;
}