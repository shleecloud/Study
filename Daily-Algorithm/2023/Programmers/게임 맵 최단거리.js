// * BFS
function bfs(start, maps) {
    let queue = [start];
    const direction = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];
    const y_length = maps.length;
    const x_length = maps[0].length;
    const countMap = Array.from(Array(y_length), () => Array(x_length).fill(-1));
    countMap[start.y][start.x] = 1;

    while (queue.length > 0) {
        const {x, y} = queue.shift();
        for (let i = 0; i < 4; i++) {
            const next_y = y + direction[i][0];
            const next_x = x + direction[i][1];

            if (
                next_y >= 0 &&
                next_y < y_length &&
                next_x >= 0 &&
                next_x < x_length &&
                maps[next_y][next_x] &&
                countMap[next_y][next_x] === -1
            ) {
                countMap[next_y][next_x] = countMap[y][x] + 1;
                queue.push({y: next_y, x: next_x});
            }
        }
    }
    return countMap[y_length - 1][x_length - 1];
}

function solution(maps) {
    return bfs({x: 0, y: 0}, maps);
}


// * DFS (효율성 실패)
function getNextLocation(location, maps) {
    const {x, y} = location;
    const result = [];

    if (y < maps.length - 1 && maps[y + 1][x]) {
        result.push({y: y + 1, x});
    }
    if (y > 0 && maps[y - 1][x]) {
        result.push({y: y - 1, x});
    }
    if (x < maps[0].length - 1 && maps[y][x + 1]) {
        result.push({y, x: x + 1});
    }
    if (x > 0 && maps[y][x - 1]) {
        result.push({y, x: x - 1});
    }
    return result;
}

function getDestinationPath(location, maps, count, countList) {
    const {x, y} = location;
    if (y === maps.length - 1 && x === maps[0].length - 1) {
        countList.push(count);
        return count;
    }

    const clonedMap = JSON.parse(JSON.stringify(maps));
    clonedMap[y][x] = 0;
    const paths = getNextLocation(location, clonedMap);
    if (paths.length === 0) {
        return -1;
    }

    for (path of paths) {
        getDestinationPath(path, clonedMap, count + 1, countList);
    }
}

function solution(maps) {
    const countList = [];
    getDestinationPath({x: 0, y: 0}, maps, 1, countList);

    return countList.length ? Math.min(...countList) : -1;
}

const maps = [
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
];
console.log(solution(maps));

