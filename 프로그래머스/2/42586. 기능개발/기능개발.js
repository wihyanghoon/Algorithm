function solution(progresses, speeds) {
    const days = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));
    let maxDay = days[0];
    let result = [0];

    for (let day of days) {
        if (day <= maxDay) {
            // 현재 작업이 maxDay 기준 이하 → 같은 그룹
            result[result.length - 1]++;
        } else {
            // 새로운 그룹 시작
            maxDay = day;
            result.push(1);
        }
    }

    return result;
}
