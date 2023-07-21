const quickSort = function (arr, callback = (a) => a) {
    // TODO: 여기에 코드를 작성합니다.
    if (arr.length < 2) return arr;

    const pivot = [];
    const left = [];
    const right = [];

    // ! Pivot 비교를 arr[0] 으로 해야되는데 pivot 자체로 비교해서 틀림
    for (let el = 0; el < arr.length; el += 1) {
        if (arr[0] === arr[el]) pivot.push(arr[el]);
        else if (callback(arr[0]) < callback(arr[el])) right.push(arr[el]);
        else left.push(arr[el]);
    }
    return [...quickSort(left), ...pivot, ...quickSort(right)];
};

let output = quickSort([3, 1, 3, 21]);
console.log(output); // --> [1, 3, 3, 21]
