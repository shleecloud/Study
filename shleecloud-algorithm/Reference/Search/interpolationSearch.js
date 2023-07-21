/**
보간 탐색(interpolation search)은 정렬된 배열에서 특정한 값을 찾는 알고리즘입니다. 
이 알고리즘은 이진 탐색(binary search)과 유사하지만, 중간값을 예측하기 위해 보간(interpolation)을 사용합니다.
JavaScript에서 보간 탐색을 구현하려면 다음과 같은 단계를 따를 수 있습니다:

1. 배열을 먼저 정렬해야 합니다. 
보간 탐색은 정렬된 배열에서만 동작합니다. 
배열을 정렬하는 방법은 다양한 알고리즘이 있지만, 가장 간단하게는 Array.prototype.sort() 메서드를 사용하여 정렬할 수 있습니다.
2. 보간 탐색 함수를 작성합니다. 
보간 탐색은 이진 탐색과 달리 중간 값을 찾을 때 선형 보간(linear interpolation)을 사용합니다. 다음은 보간 탐색을 구현한 JavaScript 함수의 예입니다:
*/

function interpolationSearch(arr, target) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx && target >= arr[leftIdx] && target <= arr[rightIdx]) {
        if (leftIdx === rightIdx) {
            if (arr[leftIdx] === target) return leftIdx;
            return -1; // 찾는 값이 없을 경우
        }

        // 중간 값을 예측하기 위해 보간식 사용
        const positionIdx = Math.floor(
            leftIdx + ((rightIdx - leftIdx) / (arr[rightIdx] - arr[leftIdx])) * (target - arr[leftIdx]),
        );
        console.log('🚀 ~ file: interpolationSearch.js:27 ~ interpolationSearch ~ positionIdx:', positionIdx);

        if (arr[positionIdx] === target) return positionIdx;

        if (arr[positionIdx] < target) {
            leftIdx = positionIdx + 1;
        } else {
            rightIdx = positionIdx - 1;
        }
    }

    return -1; // 찾는 값이 없을 경우
}

console.log('🚀 ~ file: interpolationSearch.js:3 ~ interpolationSearch:', interpolationSearch([1, 2, 3, 4, 5, 6, 7], 5));

// 재귀 보간탐색
function interpolationSearchRecursive(arr, target, low = 0, high = arr.length - 1) {
    if (low <= high && target >= arr[low] && target <= arr[high]) {
        if (low === high) {
            if (arr[low] === target) return low;
            return -1; // 찾는 값이 없을 경우
        }

        // 중간 값을 예측하기 위해 보간식 사용
        const position = Math.floor(low + ((high - low) / (arr[high] - arr[low])) * (target - arr[low]));

        if (arr[position] === target) return position;

        if (arr[position] < target) {
            return interpolationSearchRecursive(arr, target, position + 1, high);
        } else {
            return interpolationSearchRecursive(arr, target, low, position - 1);
        }
    }

    return -1; // 찾는 값이 없을 경우
}

const sortedArray = [2, 4, 6, 7, 10, 12, 15, 20];
const target = 7;
const result = interpolationSearchRecursive(sortedArray, target);
console.log(result); // 3 (7의 인덱스)
