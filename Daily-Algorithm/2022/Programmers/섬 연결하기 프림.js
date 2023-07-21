function solution(n, costs) {
    // * 프림 알고리즘
    // * 초기화
    const weights = Array(n).fill(Infinity);
    const visited = Array(n).fill(false);
    const adjacentEdge = Array.from(Array(n), (el) => new Array());
    const edgeList = [];
    // * 정점을 기준으로 간선을 나열
    // 역방향 간선까지 포함
    for (let i = 0; i < costs.length; i++) {
        const [from, to, weight] = costs[i];
        adjacentEdge[from].push([from, to, weight]);
        adjacentEdge[to].push([to, from, weight]);
    }
    // * 정점 수만큼 반복문 실행
    visited[0] = true;
    edgeList.push(...adjacentEdge[0]);
    let result = 0;
    for (let j = 1; j < n; j++) {
        // * 이미 방문한 간선 제외
        // * 가중치가 가장 작은 정점 검색
        // *
    }
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
