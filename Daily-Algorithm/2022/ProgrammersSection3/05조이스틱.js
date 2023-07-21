function solution(name) {
    const nameArray = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
    ];
    const len = name.length;
    let moveCount = 0;
    let min = len - 1;

    for (let i = 0; i < len; i++) {
        // TODO 상하 이동
        if (nameArray.indexOf(name[i]) < 13) {
            moveCount += nameArray.indexOf(name[i]);
        } else {
            moveCount += 26 - nameArray.indexOf(name[i]);
        }
        // TODO 좌우 이동
        let nextChar = i + 1;
        while (len > nextChar && name[nextChar] === 'A') {
            nextChar += 1;
        }
        // * 더 효율적인 방향을 min 변수에 적용
        min = Math.min(min, i * 2 + len - nextChar);
    }
    return (moveCount += min);
}

console.log(solution('ZZZAAAA'));
