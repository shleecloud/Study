function solution(brown, yellow) {
    function getDivisors(integer) {
        const result = [];
        // * 제곱근까지 약수 구함
        for (let i = 1; i <= Math.ceil(Math.sqrt(integer)); i++) {
            if (integer % i == 0) result.push(i);
        }
        return result;
    }
    const totalSize = brown + yellow;
    let totalCandidate = getDivisors(brown + yellow);
    // return totalCandidate;
    let totalSizeArr = totalCandidate.slice().map((el) => [totalSize / el, el]);

    let resultIndex = 0;
    for (let i = 0; i < totalSizeArr.length; i++) {
        let x = totalSizeArr[i][0];
        let y = totalSizeArr[i][1];

        while (x > 1 && y > 1) {
            x = x - 2;
            y = y - 2;
            if (x * y === yellow) {
                return totalSizeArr[i];
            }
        }
    }

    return totalSizeArr[0];
}

// 10	2	[4, 3]
// 8	1	[3, 3]
// 24	24	[8, 6]

console.log(solution(8, 1)); // [4, 3]
