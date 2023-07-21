const mergeSort = function (arr) {
    // TODO: 여기에 코드를 작성합니다.

    if (arr.length === 1) return arr;
    const middleIndex = Math.floor(arr.length / 2);
    const left = arr.slice(0, middleIndex);
    const right = arr.slice(middleIndex);
    return merge(mergeSort(left), mergeSort(right));

    function merge(leftArr, rightArr) {
        let leftIndex = 0;
        let rightIndex = 0;
        const resultArr = [];
        while (leftIndex < leftArr.length && rightIndex < rightArr.length)
            if (leftArr[leftIndex] < rightArr[rightIndex]) {
                resultArr.push(leftArr[leftIndex]);
                leftIndex += 1;
            } else {
                resultArr.push(rightArr[rightIndex]);
                rightIndex += 1;
            }
        return [...resultArr, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
        // return resultArr.concat(leftArr.slice(leftIndex), rightArr.slice(rightIndex));
    }
};

let output = mergeSort([5, 4, 3, 2, 1]);
console.log(output); // --> [1, 3, 21]
