function solution(s) {
    let str = s.split(" ")
    let number_list = [];
    let result = [];
    
    for(const char of str) {
        number_list.push(parseInt(char))
    }
    
    result[0] = Math.min(...number_list)
    result[1] = Math.max(...number_list)
    
    return result.join(" ")
}