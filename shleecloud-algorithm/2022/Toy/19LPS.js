const LPS = function (str) {
    // TODO: 여기에 코드를 작성합니다.
    if (str.length <= 1) return 0;
    let half = Math.ceil(str.length / 2);
    let result = '';
    // TODO 반으로 나누고 가장 첫 글자와 마지막 글자를 비교
    // ! 동일하다면 result 값 갱신하고 문자 수 늘려서 다시 비교
    for (let i = 1; i < half + 1; i += 1) {
        // console.log(str.slice(0, i) + ' ' + str.slice(-i));
        if (str.slice(0, i) === str.slice(-i)) {
            result = str.slice(0, i);
        }
    }
    return result.length;
};
