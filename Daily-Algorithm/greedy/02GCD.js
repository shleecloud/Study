function divideChocolateStick(M, N) {
    // TODO: 여기에 코드를 작성합니다.
    // 직원 수만큼 공평하게 나누어줄 수 있는 경우의 수를 반환 해야함
    // 빼빼로 수에 직원 수를 나눠서 떨어지는 경우의 수 나열
    // let human = 1;
    // while (human < 100) {
    //   if (M % human === 0 && N % human === 0) {
    //     result.push([human, M/human, N/human])
    //   }
    //   human += 1
    // }

    // 유클리드 호제법으로 최대공약수를 구함
    function getGcd(min, max) {
        return min % max === 0 ? max : getGcd(max, min % max);
    }
    const gcd = getGcd(Math.min(M, N), Math.max(M, N));
    const sqrt = Math.floor(Math.sqrt(gcd));
    // TODO: 최대공약수의 약수를 배열로 생성
    // * 약수는 제곱근까지 구하고 대칭으로 구할 수 있음
    let result = [];
    for (let left = 1; left <= sqrt; left += 1) {
        if (gcd % left === 0) {
            result.push([left, M / left, N / left]);
            // TODO: 제곱근을 기준으로 오른쪽 대칭
            if (left * left < gcd) {
                let right = gcd / left;
                result.push([right, M / right, N / right]);
            }
        }
    }
    return result.sort((a, b) => a[0] - b[0]);
}

let M = 1000000000;
let N = 1000000000;
let output = divideChocolateStick(M, N);
console.log(output);
// [[1, 4, 8], [2, 2, 4], [4, 1, 2]]

// ! ----------------------------------------------------------------
// 최대 공약수(유클리드 호제법: Euclidean algorithm)
function gcd(m, n) {
    if (m % n === 0) return n;
    return gcd(n, m % n);
}

function divideChocolateStickReference(M, N) {
    const result = [];
    // 최대공약수를 구한다.
    // M, N의 순서는 상관없다.
    const GCD = gcd(M, N);
    let temp = 0; //

    // 약수는 대칭적이므로 제곱근까지만 반복해도 된다.
    // 예) 36의 약수는 1, 2, 3, 4, 6, 9, 12, 18, 36이다.
    // 제곱근을 기준으로 양쪽의 값 하나씩 곱했을 때 36이 되기 때문에
    // 제곱근 보다 큰 약수는 제곱근보다 작은 약수에서 구할 수 있다.
    const sqrt = Math.floor(Math.sqrt(GCD));
    for (let left = 1; left <= sqrt; left++) {
        if (GCD % left === 0) {
            // 최대공약수의 약수인 경우 중 제곱근 보다 작은 약수의 경우
            result.push([left, M / left, N / left]);
            if (left * left < GCD) {
                // 제곱근이 아닌 경우(제곱근 보다 작은)
                right = GCD / left; // 최대 공약수를 제곱근이 아닌 수로 나누면 제곱근 보다 큰 약수를 구할 수 있다.
                result.push([right, M / right, N / right]);
            }
        }
    }

    // '빼빼로를 받게 되는 직원의 수'를 기준으로 오름차순으로 정렬
    result.sort((op1, op2) => op1[0] - op2[0]);

    return result;
}
