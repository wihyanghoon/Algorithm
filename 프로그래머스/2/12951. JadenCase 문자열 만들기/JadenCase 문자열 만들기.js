function solution(s) {
    var arr = s.toLowerCase().split(" ");
    
    for (let index in arr) {
        let word = arr[index];
        // 단어가 존재할 때만 처리
        if (word.length > 0) {
            // 첫 글자가 숫자가 아닌 경우만 변환
            if (!(/[0-9]/.test(word[0]))) {
                arr[index] = word[0].toUpperCase() + word.slice(1);
            }
        }
    }
    
    return arr.join(" "); // 배열을 문자열로 합치기
}
