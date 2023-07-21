function solution(n, computers) {
    const visited = Array(n).fill(false);
    const queue = [computers[0]];
    let result = 1;
    visited[0] = true;
    while (visited.indexOf(false) !== -1) {
        // 이어진 네트워크가 없는 경우 방문하지 않은 컴퓨터를 큐에 삽입
        if (queue.length === 0) {
            let newNetworkIdx = visited.indexOf(false);
            queue.push(computers[newNetworkIdx]);
            visited[newNetworkIdx] = true;
            result += 1;
        }
        // shift 이후 bfs로 검색
        const computer = queue.shift();
        for (let i = 0; i < n; i++) {
            if (computer[i] === 1) {
                if (visited[i] === false) {
                    visited[i] = true;
                    queue.push(computers[i]);
                }
            }
        }
    }
    return result;
}

console.log(
    solution(3, [
        [1, 0, 0],
        [0, 1, 1],
        [0, 1, 1],
    ]),
);
// n	computers	return
// 3	[[1, 1, 0], [1, 1, 0], [0, 0, 1]]	2
// 3	[[1, 1, 0], [1, 1, 1], [0, 1, 1]]	1
