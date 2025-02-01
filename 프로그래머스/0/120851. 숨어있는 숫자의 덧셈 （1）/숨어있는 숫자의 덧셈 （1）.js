function solution(my_string) {
    var sum = 0;
    var arr = my_string.split("")
    
    for(const value of arr) {
        if(Number(value)) sum += Number(value)
    }
    
    return sum
}