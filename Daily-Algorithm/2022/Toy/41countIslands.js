const countIslands = function (grid) {
    // TODO: 여기에 코드를 작성합니다.
    if (grid.length === 0) return 0;
    let count = 0;

    // TODO: 동서남북 확인한 땅을 2로 체크
    const getIslands = function (col, row) {
        grid[col][row] = '2';
        if (!!grid[col][row + 1] && grid[col][row + 1] === '1') getIslands(col, row + 1);
        if (!!grid[col][row - 1] && grid[col][row - 1] === '1') getIslands(col, row - 1);
        if (!!Array.isArray(grid[col + 1]) && grid[col + 1][row] === '1') getIslands(col + 1, row);
        if (!!Array.isArray(grid[col - 1]) && grid[col - 1][row] === '1') getIslands(col - 1, row);
    };

    // TODO: 섬 순회
    for (let col = 0; col < grid.length; col++) {
        for (let row = 0; row < grid[0].length; row++) {
            if (grid[col][row] === '1') {
                count++;
                getIslands(col, row);
            }
        }
    }
    return count;
};

const isl = [
    ['0', '1', '1', '1', '0'],
    ['0', '1', '0', '0', '0'],
    ['0', '0', '0', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '1', '0'],
];

console.log(countIslands(isl));
