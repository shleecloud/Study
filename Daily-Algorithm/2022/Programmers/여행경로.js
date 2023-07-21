function solution(tickets) {
    const start = 'ICN';
    const visited = [];
    // * 문자 정렬
    tickets.sort((a, b) => a[1].localeCompare(b[1]));
    // * DFS 실행
    function dfs(start, visited) {
        const destinations = [];
        // * 중복을 고려해서 인덱스를 기준으로 티켓 사용 여부 판단
        for (let i = 0; i < tickets.length; i++) {
            if (tickets[i][0] === start) destinations.push(i);
        }
        for (let destinationIdx of destinations) {
            if (visited.includes(destinationIdx)) continue;
            const newVisited = visited.slice();
            newVisited.push(destinationIdx);
            const newRoutes = dfs(tickets[destinationIdx][1], newVisited);
            if (newRoutes.length === tickets.length) return newRoutes;
        }
        return visited;
    }

    const routes = dfs(start, visited);
    const result = ['ICN', ...routes.map((el) => tickets[el][1])];
    return result;
}

console.log(
    solution([
        ['ICN', 'JFK'],
        ['HND', 'IAD'],
        ['JFK', 'HND'],
    ]),
);

// ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]
console.log(
    solution([
        ['ICN', 'SFO'],
        ['ICN', 'ATL'],
        ['SFO', 'ATL'],
        ['ATL', 'ICN'],
        ['ATL', 'SFO'],
    ]),
);
