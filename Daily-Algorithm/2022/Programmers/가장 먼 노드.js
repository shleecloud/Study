function solution(n, edge) {
    // * 쌍방향 간선으로 전환 (객체로 효율성 증가)
    // const edges = edge.concat(edge.map((el) => [el[1], el[0]]));
    const edges = edge.reduce((acc, [start, end]) => {
        if (!Array.isArray(acc[start])) acc[start] = [];
        if (!Array.isArray(acc[end])) acc[end] = [];
        acc[start].push([start, end]);
        acc[end].push([end, start]);
        return acc;
    }, {});

    // * BFS 초기화
    // * 1번 노드에서 시작
    const visited = Array(n + 1).fill(false);
    const distances = Array(n + 1).fill(0);
    let queue = [];
    visited[1] = true;
    queue = queue.concat(edges['1']);

    // * BFS 실행
    // * distances 값이 1씩 늘어남
    while (visited.indexOf(false) !== -1 && queue.length > 0) {
        const [start, end] = queue.shift();
        if (visited[end] === false) {
            distances[end] = distances[start] + 1;
            visited[end] = true;
            queue = queue.concat(edges[`${end}`]);
        }
    }

    // * 가장 먼 거리를 가진 노드의 갯수를 구함
    const maximumDistance = Math.max(...distances);
    const result = distances.reduce((acc, cur) => {
        if (cur >= maximumDistance) acc++;
        return acc;
    }, 0);
    return result;
}

const n = 6;
const edge = [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
];
console.log(solution(n, edge));
