function solution(s) {
    // 문자열의 길이가 4 또는 6인지 확인
  if (s.length === 4 || s.length === 6) {
    // 정규 표현식을 사용하여 숫자로만 구성되어 있는지 확인
    return /^\d+$/.test(s);
  }
  return false;
}