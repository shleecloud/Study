// 아래 코드는 수정하지 마세요.
function swap(idx1, idx2, arr) {
    // 두 변수를 바꾸는 방법

    // 1) 임시 변수를 활용한 방법
    // let temp = arr[idx1];
    // arr[idx1] = arr[idx2];
    // arr[idx2] = temp;

    // 2) Destructuring assignment를 활용한 방법
    // arr이 reference type이라 가능
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

    // 3) XOR 연산을 활용한 방법
    // arr이 reference type이라 가능
    // arr[idx1] ^= arr[idx2];
    // arr[idx2] ^= arr[idx1];
    // arr[idx1] ^= arr[idx2];
}

function getParentIdx(idx) {
    // TODO: 여기에 코드를 작성합니다.
    // if (Math.floor(idx / 2) === 0) return 0
    return Math.floor((idx - 1) / 2);
}

function insert(heap, item) {
    // TODO: 여기에 코드를 작성합니다.
    let idx = heap.length;
    heap.push(item);
    let swapped = true;

    while (swapped) {
        swapped = false;
        let parentIdx = getParentIdx(idx);
        if (heap[idx] > heap[parentIdx]) {
            swapped = true;
            swap(idx, parentIdx, heap);
            idx = parentIdx;
        }
    }

    return heap;
}

// 아래 코드는 수정하지 마세요.
const binaryHeap = function (arr) {
    return arr.reduce((heap, item) => {
        return insert(heap, item);
    }, []);
};

// [ 9, 7, 6, 5, 4, 10, 2 ] to equal Array [ 10, 6, 9, 4, 5, 2, 7 ]
output = binaryHeap([9, 6, 7, 4, 5, 2, 10]);
console.log(output); // --> [10, 5, 3, 4, 1]
