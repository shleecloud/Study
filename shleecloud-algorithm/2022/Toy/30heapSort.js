// 아래 코드는 수정하지 마세요.
function swap(idx1, idx2, arr) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function getParentIdx(idx) {
    // TODO: 여기에 코드를 작성합니다.
    return Math.floor((idx - 1) / 2);
}

function insert(heap, item) {
    // TODO: 여기에 코드를 작성합니다.
    let idx = heap.length;
    let parentIdx = getParentIdx(idx);
    heap.push(item);
    let changed = true;
    while (changed) {
        changed = false;
        if (heap[idx] < heap[parentIdx]) {
            changed = true;
            swap(idx, parentIdx, heap);
            idx = parentIdx;
            parentIdx = getParentIdx(idx);
        }
    }
    return heap;
}

function removeRoot(heap) {
    // TODO: 여기에 코드를 작성합니다.
    if (heap.length === 0) return null;
    const minNum = heap.shift();
    if (heap.length === 0) return minNum;
    //가장 뒤에 노드를 최상단으로 올림
    heap.unshift(heap.pop());
    let idx = 0;
    let childIdx = (heap[1] || Math.MAX_SAFE_INTEGER) > (heap[2] || Math.MAX_SAFE_INTEGER) ? 2 : 1;
    let changed = true;
    while (changed) {
        changed = false;
        if (heap[idx] > heap[childIdx]) {
            swap(idx, childIdx, heap);
            idx = childIdx;
            childIdx = idx * 2 - 1;
            // 더이상 자식 노드가 없을 때 while 반복문 종료
            if (childIdx > heap.length - 1) changed = false;
            else changed = true;
        }
    }
    return minNum;
}

// 아래 코드는 수정하지 마세요.
const binaryHeap = function (arr) {
    return arr.reduce((heap, item) => {
        return insert(heap, item);
    }, []);
};

const heapSort = function (arr) {
    let minHeap = binaryHeap(arr);
    // TODO: 여기에 코드를 작성합니다.
    let result = [];
    for (let i = 0; i < arr.length; i += 1) {
        result.push(removeRoot(minHeap));
    }
    return result;
};

let output = heapSort([5, 4, 3, 2, 1]);
console.log(output); // --> [1, 2, 3, 4, 5]
