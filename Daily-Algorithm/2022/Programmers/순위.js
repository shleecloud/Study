function solution(n, results) {
    const rankObj = {};
    for (let i = 1; i <= n; i++) {
        rankObj[i] = {win: [], lose: []};
    }
    for (let result of results) {
        let [winner, losser] = result;
        // if (!rankObj[winner]) rankObj[winner] = { win: [], lose: [] };
        // if (!rankObj[losser]) rankObj[losser] = { win: [], lose: [] };
        rankObj[winner].win.push(losser);
        rankObj[losser].lose.push(winner);
    }
    // * bfs
    function rankBfs(player, result) {
        let queue = [];
        queue = queue.concat(rankObj[player][result]);
        const visited = [];
        while (queue.length > 0) {
            let rival = queue.shift();
            if (visited.includes(rival)) continue;
            visited.push(rival);
            queue = queue.concat(rankObj[rival][result]);
        }
        return visited;
    }
    // * 내가 이긴 사람에게 진 사람
    // * 내가 진 사람을 이긴 사람
    let result = 0;
    for (let i = 1; i <= n; i++) {
        rankObj[i].win = rankBfs(i, 'win');
        rankObj[i].lose = rankBfs(i, 'lose');
        if (rankObj[i].win.length + rankObj[i].lose.length === n - 1) result += 1;
    }

    return result;
}

// const n = 5;
// const results = [
//   [4, 3],
//   [4, 2],
//   [3, 2],
//   [1, 2],
//   [2, 5],
// ]; // 2

// console.log(solution(n, results));

console.log(solution(1, []));
