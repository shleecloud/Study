function boringBlackjack(cards) {
    // TODO: 여기에 코드를 작성합니다.

    // TODO: 소수인지 확인
    function isPrime(num) {
        if (num === 2) return true;
        // 제곱근보다 작은 수까지 소수 판별
        for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
            // 한 번이라도 나누어 졌으니 소수가 아니므로 return false
            if (num % i === 0) return false;
        }
        // 나눠진 수가 없다면 해당 수는 소수이므로 return true
        return true;
    }

    // TODO: 조합 구하기
    function getCombination(arr, selectNumber) {
        if (selectNumber === 1) return arr.map((el) => [el]);

        const result = [];
        arr.forEach((fixed, index, origin) => {
            const rest = origin.slice(index + 1);
            const combinations = getCombination(rest, selectNumber - 1);
            const attached = combinations.map((el) => [fixed, ...el]);
            result.push(...attached);
        });
        return result;
    }

    const combinations = getCombination(cards, 3);
    return combinations.reduce((acc, cur) => {
        const sum = cur.reduce((acc, cur) => acc + cur, 0);
        if (isPrime(sum)) return (acc += 1);
        else return acc;
    }, 0);
}

const cards = [1, 2, 3, 4];
const result = boringBlackjack(cards);
console.log(result);
