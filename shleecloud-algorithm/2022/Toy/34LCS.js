const LCS = function (str1, str2) {
    //TODO: 여기에 코드를 작성합니다.
    const str1Len = str1.length;
    const str2Len = str2.length;
    const array = Array.from({length: str1Len + 1}, () => Array.from({length: str2Len + 1}, () => 0));
    for (let str1Idx = 1; str1Idx < str1Len + 1; str1Idx++) {
        for (let str2Idx = 1; str2Idx < str2Len + 1; str2Idx++) {
            if (str1[str1Idx] === str2[str2Idx]) {
                array[str1Idx][str2Idx] += array[str1Idx - 1][str2Idx - 1];
            } else {
                array[str1Idx][str2Idx] = Math.max(array[str1Idx - 1][str2Idx], array[str1Idx][str2Idx - 1]);
            }
        }
    }
    return array[str1Len][str2Len];
};

let output = LCS('abcd', 'aceb');
console.log(output); // --> 2 ('ab' or 'ac')
