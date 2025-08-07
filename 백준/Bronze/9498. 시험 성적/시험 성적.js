var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();
var score = parseInt(input);

function solution(score) {
    if (score >= 90 && score <= 100) {
        console.log("A");
    } else if (score >= 80) {
        console.log("B");
    } else if (score >= 70) {
        console.log("C");
    } else if (score >= 60) {
        console.log("D");
    } else {
        console.log("F");
    }
}

solution(score);