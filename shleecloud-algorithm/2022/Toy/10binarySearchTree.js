const binarySearch = function (arr, target) {
    // TODO : 여기에 코드를 작성합니다.
    let left = 0;
    let right = arr.length;
    let mid = Math.floor(arr.length / 2);
    while (left <= right) {
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
        mid = Math.floor((right + left) / 2);
    }
    return -1;
};

let output = binarySearch([0, 1, 2, 3, 4, 5, 6], 5);
console.log(output);
