function divisors(integer) {
    const result = [];
    // * 제곱근까지 약수 구함
    for (let i = 1; i <= Math.ceil(Math.sqrt(integer)); i++) {
        if (integer % i == 0) result.push(i);
    }
    // * 절반의 약수에 원본 값을 나눠서 나머지 약수를 구함
    const halfIndex = result.length;
    for (let j = halfIndex - 1; j >= 0; j--) {
        const number = result[j];
        const div = integer / number;
        if (number === div) continue;
        result.push(div);
    }
    return result;
}

console.log(divisors(9));
