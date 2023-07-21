function orderOfPresentation(N, K) {
    // TODO: 여기에 코드를 작성합니다.
    // N -> 최대값
    // K -> 배열, 요소 하나씩 돌면서 경우의 수 계산
    function factorial(num) {
        if (num <= 1) return 1;
        let acc = num;
        for (let cur = acc - 1; cur > 1; cur--) acc = acc * cur;
        return acc;
    }

    let counter = 0;
    let factAfter = K.slice();
    factAfter = factAfter.sort((a, b) => a - b);
    for (let i = 0; i < N; i++) {
        let factBefore = factAfter.slice();
        let index = factBefore.indexOf(K[i]);

        console.log(factBefore);
        counter = counter + factorial(N - i - 1) * index;
        factAfter = factBefore.filter((el) => el !== K[i]);
    }
    return counter;
}

let output = orderOfPresentation(3, [2, 3, 1]);
console.log(output); // 3

output = orderOfPresentation(5, [1, 3, 2, 4, 5]);
console.log(output); // 6
