function solution(numbers) {
    numbers.sort((a, b) => {
        return Number('' + b + a) - Number('' + a + b);
    });
    if (numbers[0] === 0) return '0';
    return numbers.join('');
}

console.log(solution([0, 0, 0, 0, 0]));
