function solution(arr) {
    let stack = []; // 스택 선언

    for (let number of arr) {
        // 스택이 비어있거나, 스택의 최상단 값이 현재 값과 다르면 추가
        if (stack.length === 0 || stack[stack.length - 1] !== number) {
            stack.push(number);
        }
    }

    return stack;
}
