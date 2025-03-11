function solution(n, control) {
    let number = n;
    let str = control.split("")
    
    for(const char of str) {
        switch (char) {
          case "w":
            number++;
            break;
          case "s":
            number--;
            break;
          case "d":
            number += 10;
            break;
          case "a":
            number -= 10;
            break;
        default:
                number = number
        }
    }
    
    return number;
}