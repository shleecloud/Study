function solution(n, edge) {
    // TODO 양방향 엣지 만들기
    let edges = edge.reduce((acc, cur) => {
        acc[cur[0]] = !acc[cur[0]] ? [cur[1]] : acc[cur[0]].concat(cur[1]);
        acc[cur[1]] = !acc[cur[1]] ? [cur[0]] : acc[cur[1]].concat(cur[0]);
        return acc;
    }, {});
    // {
    //   '1': [ 3, 2 ],
    //   '2': [ 3, 1, 4, 5 ],
    //   '3': [ 6, 4, 2, 1 ],
    //   '4': [ 3, 2 ],
    //   '5': [ 2 ],
    //   '6': [ 3 ]
    // }
    // TODO 최단거리 구하기

    let;
}

let result = solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
]);

console.log(result);
