function solution(line) {
    const INF = Number.MAX_SAFE_INTEGER;
    const crossPoint = [];

    let minX = INF;
    let minY = INF;
    let maxX = -INF;
    let maxY = -INF;

    // TODO 교차점을 확인
    // * 반복문으로 조합 구현
    for (let i = 0; i < line.length - 1; i += 1) {
        for (let j = i + 1; j < line.length; j += 1) {
            const [a, b, e] = line[i];
            const [c, d, f] = line[j];
            const mod = a * d - b * c;

            // ! 분모가 0인 경우 무시
            if (mod === 0) continue;
            const xNum = b * f - e * d;
            const yNum = e * c - a * f;

            // ! 교차점이 정수가 아닌 경우 무시
            if (xNum % mod !== 0 || yNum % mod !== 0) continue;

            const x = xNum / mod;
            const y = yNum / mod;

            crossPoint.push([x, y]);
            minX = Math.min(minX, x);
            minY = Math.min(minY, y);
            maxX = Math.max(maxX, x);
            maxY = Math.max(maxY, y);
        }
    }
    // TODO 최대 최소 좌표로 배경 만들기
    const paper = Array.from(
        {length: maxY - minY + 1}, //
        () => Array.from({length: maxX - minX + 1}, () => '.'),
    );
    // TODO 좌표로 별 찍기
    // * 제일 작은 X가 0이 되어야 함.
    // * 제일 큰 Y가 0이 되어야 함.
    crossPoint.forEach(([x, y]) => {
        paper[maxY - y][x - minX] = '*';
    });
    return paper.map((el) => el.join(''));
}

let l = [
    [2, -1, 4],
    [-2, -1, 4],
    [0, -1, 1],
    [5, -8, -12],
    [5, 8, 12],
];
console.log(solution(l));
