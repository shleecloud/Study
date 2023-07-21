function solution(numbers) {
    // 소수 구하는 함수
    const isPrimeNumber = (n) => {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    };

    let primes = [];
    function dfs(str) {
        // 최대 숫자까지 도달했을 때
        let sum = '';
        for (let el = 0; el < str.length; el += 1) sum += numbers[str[el]];
        isPrimeNumber(Number(sum)) ? primes.push(Number(sum)) : {};
        if (str.length === numbers.length) return;

        // Index 대상으로 재귀 수행
        for (let el = 0; el < numbers.length; el += 1) {
            if (str.includes(String(el))) continue;
            else dfs(str + String(el));
        }
    }
    for (let el = 0; el < numbers.length; el += 1) dfs(String(el));
    let primesSet = new Set(primes);
    primes = [...primesSet];
    return primes.length;
}

console.log(solution('011'));
console.log(solution('17'));
