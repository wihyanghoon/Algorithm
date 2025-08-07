var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();
var year = parseInt(input);

function solution(year) {
    if(year % 4 === 0 && (year % 100 !== 0) || year % 400 === 0) {
        console.log(1)
    } else {
        console.log(0)
    }
    
}

solution(year);