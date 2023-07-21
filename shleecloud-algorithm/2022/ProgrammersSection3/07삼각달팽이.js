function solution(n) {
    // TODO: 삼각형 만들기
    const array = Array.from({length: n}, () => []);
    array.map((el, i) => {
        el.length = i + 1;
        el.fill(null);
    });
    // TODO: 반복문 3개로 회전 구현
    let row = -1;
    let col = 0;
    let count = 0;
    while (n > 0) {
        // * 왼쪽 대각선. row만 늘어나고 col은 고정
        for (let i = 0; i < n; i++) {
            row += 1;
            count += 1;
            array[row][col] = count;
        }
        // * 하단선. row는 그대로 col만 늘어남. 반복 횟수가 1회 줄어든다.
        for (let i = 0; i < n - 1; i++) {
            col += 1;
            count += 1;
            array[row][col] = count;
        }
        // * 오른쪽 대각선.
        for (let i = 0; i < n - 2; i++) {
            row -= 1;
            col -= 1;
            count += 1;
            array[row][col] = count;
        }
        n -= 3;
    }
    return array.flatMap((el) => el);
}
console.log(solution(3));

// n	result
// 4	[1,2,9,3,10,8,4,5,6,7]
// 5	[1,2,12,3,13,11,4,14,15,10,5,6,7,8,9]
// 6	[1,2,15,3,16,14,4,17,21,13,5,18,19,20,12,6,7,8,9,10,11]
