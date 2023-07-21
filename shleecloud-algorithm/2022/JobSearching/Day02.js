function solution(nums) {
    function isPrimeNumber(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    function getCombination(arr, selectNum) {
        const result = [];
        if (selectNum === 1) return arr.map((el) => [el]);
        arr.forEach((fixed, index, origin) => {
            const rest = origin.slice(index + 1);
            const combination = getCombination(rest, selectNum - 1);
            const attached = combination.map((el) => [fixed, ...el]);
            result.push(...attached);
        });
        return result;
    }

    const combination = getCombination(nums, 3).map((el) => el[0] + el[1] + el[2]);
    console.log(combination);

    return combination.reduce((acc, cur) => {
        if (isPrimeNumber(cur)) return (acc += 1);
        else return acc;
    }, 0);
}

//
