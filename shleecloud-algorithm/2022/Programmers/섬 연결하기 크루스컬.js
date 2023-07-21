function solution(n, costs) {
    // * union-find 구현
    let result = 0;
    const parent = Array(n)
        .fill(0)
        .map((el, idx) => idx);
    // * union by rank
    const rank = Array(n).fill(0);

    function findParent(node) {
        if (parent[node] === node) return node;
        else return findParent(parent[node]);
    }

    function unionParent(left, right) {
        left = findParent(left);
        right = findParent(right);
        if (left === right) return false;
        if (rank[left] < rank[right]) parent[left] = right;
        else {
            parent[right] = left;
            if (rank[left] === rank[right]) rank[left]++;
        }
        return true;
    }

    // * cost 순서로 내림차순 정렬
    const sortedCosts = costs.slice().sort((a, b) => b[2] - a[2]);
    for (let i = 0; i < costs.length; i++) {
        let [from, to, cost] = sortedCosts.pop();
        if (unionParent(from, to)) result += cost;
    }
    return result;
}

console.log(
    solution(5, [
        [0, 1, 1],
        [3, 4, 1],
        [1, 2, 2],
        [2, 3, 4],
    ]),
);

// n / costs / answer
// 5 [[0, 1, 5], [1, 2, 3], [2, 3, 3], [3, 1, 2], [3, 0, 4], [2, 4, 6], [4, 0, 7]] 15
// 5 [[0, 1, 1], [3, 4, 1], [1, 2, 2], [2, 3, 4]] 8
// 4 [[0, 1, 5], [1, 2, 3], [2, 3, 3], [1, 3, 2], [0, 3, 4]] 9
// 5 [[0, 1, 1], [3, 1, 1], [0, 2, 2], [0, 3, 2], [0, 4, 100]] 104
// 6 [[0, 1, 5], [0, 3, 2], [0, 4, 3], [1, 4, 1], [3, 4, 10], [1, 2, 2], [2, 5, 3], [4, 5, 4]] 11
// 5 [[0, 1, 1], [2, 3, 1], [3, 4, 2], [1, 2, 2], [0, 4, 100]] 6
// 5 [[0, 1, 1], [0, 4, 5], [2, 4, 1], [2, 3, 1], [3, 4, 1]] 8
// 5 [[0, 1, 1], [0, 2, 2], [0, 3, 3], [0, 4, 4], [1, 3, 1]] 8
