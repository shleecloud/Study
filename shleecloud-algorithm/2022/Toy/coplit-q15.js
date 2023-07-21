// 다차원 배열을 입력받아 1차원 배열로 변환하여 리턴해야 합니다.
// 함수 flattenArr는 재귀함수의 형태로 작성합니다.
// Array Method flat()과 flatMap() 사용은 금지됩니다.
// 반복문(for, while) 사용이 가능합니다.
// 입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
// 입력으로 전달되는 다차원 배열이 중첩된 정도(중첩의 깊이)는 정해져 있지 않습니다.
// 빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.

function flattenArr(arr) {
    // TODO: 여기에 코드를 작성합니다.
    if (arr.length === 0) return [];
    // if (arr.length === 1) return arr[0];

    let head = arr[0];
    let tail = arr.length === 1 ? [] : arr.slice(1);

    if (Array.isArray(head)) {
        return flattenArr(head.concat(tail));
    } else {
        return [head].concat(flattenArr(tail));
    }
}

let output = flattenArr([[1], 2, [3, 4], 5]);
console.log(output); // --> [1, 2, 3, 4, 5]

output = flattenArr([[2, [[3]]], 4, [[[5]]]]);
console.log(output); // --> [2, 3, 4, 5]
