function solution(answers) {
    var answer = [];
    // 수포자 찍는 방식을 담는다
    var patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ]
    var score = [0, 0, 0];
    
    for(const [i, answer] of answers.entries()) {
        for(const [j, pattern] of patterns.entries()) {
            if(answer === pattern[i % pattern.length]){
                score[j] += 1;
            }
        }
    }
    

    const maxScore = Math.max(...score);
    const highScore = [];
    
    for(let i = 0; i < score.length; i++) {
        if(score[i] === maxScore) {
            highScore.push(i+1);
        }
    }
    
    return highScore;
}