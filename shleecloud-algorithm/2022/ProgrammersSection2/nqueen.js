function solution(n) {
    let board = [];
    let count = 0;
    // board = [1, 3, 0, 2]
    // 가장 마지막에 입력한 수의 중복 확인
    function duplicationCheck(board) {
        debugger;
        const targetNum = board[board.length - 1];
        // 퀸이 1개 이하면 true
        if (board.length === 1) return true;
        // 세로 확인
        if (board.indexOf(targetNum) !== board.length - 1) return false;
        // 대각선 확인
        for (let i = 1; i <= board.length; i += 1) {
            if (board[board.length - 1 - i] === targetNum + i) return false;
            if (board[board.length - 1 - i] === targetNum - i) return false;
        }
        return true;
    }

    function nqueen(board) {
        // 끝까지 채워졌을 경우 count 추가
        if (board.length === n) {
            count += 1;
            return;
        }

        for (let queensX = 0; queensX < n; queensX += 1) {
            let newBoard = board.slice();
            newBoard.push(queensX);
            if (duplicationCheck(newBoard)) {
                nqueen(newBoard);
            }
        }
    }
    nqueen(board);
    return count;
}

console.log(solution(4));
