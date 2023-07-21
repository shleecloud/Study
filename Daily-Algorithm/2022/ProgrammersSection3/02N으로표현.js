function solution(N, number) {
    if (N === 0) return 1;
    if (N === number) return 1;
    // TODO 총 8번의 연산이 이루어진다. 따라서 8개의 요소를 가진 배열
    // TODO 각 요소는 Set 자료형으로 할당해서 중복의 경우를 제외한다.

    const result = Array.from({length: 9}, () => new Set());
    // TODO 총 8번의 연산
    for (let i = 1; i < 9; i += 1) {
        // TODO 같은 수가 늘어날 경우의 수를 미리 추가.
        result[i].add(Number(N.toString().repeat(i)));
        // TODO 이전 계산 결과들을 가지고 사칙연산 수행
        // * 예를들어 3회 연산이면 (1, 2), (2, 1)
        // * 예를들어 4회 연산이면 (1, 3), (2, 2), (3, 1) 연산 결과를 4회 자리에 입력
        // * 예를들어 5회 연산이면?(1, 4), (2, 3), (3, 2), (4, 1)
        for (let j = 1; j < i; j += 1) {
            for (let left of result[j]) {
                for (let right of result[i - j]) {
                    result[i].add(left + right);
                    result[i].add(left - right);
                    result[i].add(left * right);
                    result[i].add(Math.floor(left / right));
                }
            }
            if (result[i].has(number)) {
                return i;
            }
        }
    }
    return -1;
}

console.log(solution(5, 12));
