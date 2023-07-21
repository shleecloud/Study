function solution(n) {
    let board = [];
    for (let i = 0; i < n; i += 1) board.push([false, false, false, false].slice());
    let count = 0;

    function dupCheck(board, newQueen) {
        let horizon = board[newQueen[0]];
        let vertical = board[newQueen[1]];
        for (let i = 0; i < num; i += 1) {
            let target = board[i].includes(true);
        }
    }

    function nqueen(board, num) {
        // 보드 깊은 복사
        newBoard = [];
        for (let i = 0; i < n; i += 1) newBoard.push(board[i].slice());

        //
    }
    nqueen(board, 0);
    return board;
}

console.log(solution(4));
