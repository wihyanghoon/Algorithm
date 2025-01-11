function solution(my_string, letter) {
    return [...my_string].filter((v, i) => v !== letter).join("");
}