function solution(angle) {
    var answer = 0;
    // 0보다 크고 90보다 작을때
    if(0 < angle && angle < 90) {
        answer = 1;
    // 직각일때
    } else if (angle === 90){
        answer = 2;
    // 90도보다 크고 180보다 작을때
    } else if (90 < angle && angle < 180) {
        answer = 3;
    } else if (angle === 180) {
        answer = 4;
    }    
    
    return answer;
}