const insertionSort = function (arr, callback = (a) => a) {
    // TODO: 여기에 코드를 작성합니다.
    // * insertionSort 함수의 두 번째 인자로 callback 함수를 받아서, 그 함수의 리턴값을 기준으로 요소들을 정렬해 보세요.
    debugger;
    let newArr = arr.slice();
    if (arr.length <= 1) return arr;
    // 메인 Index
    for (let mainIndex = 1; mainIndex < arr.length; mainIndex += 1) {
        // 정렬 Index 뒤로 돌아감
        for (let sortIndex = mainIndex; sortIndex >= 1; sortIndex -= 1) {
            let changed = false;
            if (callback(newArr[sortIndex]) < callback(newArr[sortIndex - 1])) {
                changed = true;
                let temp = newArr[sortIndex];
                newArr[sortIndex] = newArr[sortIndex - 1];
                newArr[sortIndex - 1] = temp;
            }
            if (!changed) break;
        }
    }
    return newArr;
};

let output = insertionSort([21, 3, 1], (a) => -a);
console.log(output); // --> [1, 3, 21]
