function solution(n, k) {
    function getCombinations(arr, selectNum) {
        if (selectNum === 1) return arr.map((el) => [el]);
        const result = [];
        arr.forEach((fixed, index, origin) => {
            //const rest = origin.slice(index + 1); 조합의 경우
            const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
            const combinations = getCombinations(rest, selectNum - 1);
            const attached = combinations.map((el) => [fixed, ...el]);
            result.push(...attached);
        });
        return result;
    }

    const arr = Array(n)
        .fill(0)
        .map((el, idx) => idx + 1);
    const combinations = getCombinations(arr, n);
    return combinations[k - 1];
}
