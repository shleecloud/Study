function movingStuff(stuff, limit) {
    // TODO: 여기에 코드를 작성합니다.
    // 탐욕 알고리즘 - 가장 효율적인 경우의 수를 우선 처리
    // right 최대값 구하기
    function getRight(min, max) {
        for (let i = max; i > min; i -= 1) {
            if (limit >= stuff[min] + stuff[i]) {
                return i;
            }
        }
        return false;
    }

    // 오름차순 정렬
    stuff = stuff.sort((a, b) => a - b);
    let left = 0;
    let right = stuff.length - 1;
    let count = 0;
    // 가장 작은 박스부터 순차적으로 2개가 들어가는 경우 확인
    for (let i = 0; i < stuff.length; i += 1) {
        left = i;
        right = getRight(left, right);
        if (!!right) {
            count += 1;
            right -= 1;
        } else {
            break;
        }
    }
    return stuff.length - count;
}

console.log(movingStuff([42, 25, 60, 73, 103, 167], 187)); // 4
