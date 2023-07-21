const largestProductOfThree = function (arr) {
    // TODO: 여기에 코드를 작성합니다.
    // 오름차순 정렬
    arr = arr.sort((a, b) => a - b);
    // 0이 있는지 확인하고 제거
    let isZero = arr.includes(0);
    if (isZero) arr.splice(arr.indexOf(0), 1);
    // 0이 있는데 길이가 3이면 0 리턴
    if (arr.length < 3 && isZero) return 0;

    // 최대값 배열과 최소값 배열
    let left = arr.slice(0, 3);
    let right = arr.slice(-3);

    // 경우의 수, 음음양 or 양양양 or 0
    let ppp = right[0] * right[1] * right[2];
    let mmp = left[0] * left[1] * right[2];
    let result = ppp < mmp ? mmp : ppp;
    if (result < 0 && isZero) result = 0;
    return result;
};

output = largestProductOfThree([-1, 2, -5, 7]);
console.log(output); // --> 35 (= -1 * -5 * 7)
