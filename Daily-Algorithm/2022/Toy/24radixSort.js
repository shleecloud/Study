function radixSort(arr) {
    // todo: 여기에 코드를 작성합니다.

    // 해당하는 10의 자릿수를 확인
    function getDigit(num, digit) {
        return Math.floor(Math.abs(num) / Math.pow(10, digit)) % 10;
    }

    // 최대 몇자리까지 있는지 확인
    function mostDigitLen(nums) {
        let mostDigits = 0;
        for (let i = 0; i < nums.length; i += 1) {
            mostDigits = Math.max(mostDigits, nums[i].toString().length);
        }
        return mostDigits;
    }

    let result = [];
    // 최대 자릿수 확인하고 그만큼 반복문 실행
    const maxDigits = mostDigitLen(arr);
    for (let i = 0; i < maxDigits; i += 1) {
        // 양의 배열과 음의 배열 생성
        let digitBucketsPlus = Array.from(new Array(10), () => []);
        let digitBucketsMinus = Array.from(new Array(10), () => []);
        // 배열 순회
        for (let j = 0; j < arr.length; j += 1) {
            // 값이 양수인지 음수인지 확인
            // 해당 자릿수에 해당하는 배열에 입력
            if (arr[j] > 0) {
                let digit = getDigit(arr[j], i);
                digitBucketsPlus[digit].push(arr[j]);
            } else {
                let digit = getDigit(arr[j], i);
                digitBucketsMinus[digit].push(arr[j]);
            }
        }
        arr = [].concat(...digitBucketsMinus.reverse(), ...digitBucketsPlus);
    }
    return arr;
}

console.log(radixSort([1, 2, 43, 100, 21]));
