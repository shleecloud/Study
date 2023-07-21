const sudoku = function (board) {
    // TODO: 여기에 코드를 작성합니다.
    // 중복되는 숫자를 제외한 배열 반환
    // 기존 값을 변경하지 않게 새로운 배열 생성

    function initBoard() {
        let iBoard = [];
        for (let i = 0; i < 9; i += 1) iBoard.push(board[i].slice());
        return iBoard;
    }

    function checknewBoard(yTarget, xTarget) {
        let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        // x 배열 초기화
        let xArr = board[yTarget].slice();
        // y 배열 초기화
        let yArr = [];
        for (let i = 0; i < 9; i += 1) yArr.push(board[i][xTarget]);
        // 지역 배열 초기화
        let areaArr = [];
        let areaX = Math.ceil((xTarget + 1) / 3);
        let areaY = Math.ceil((yTarget + 1) / 3);
        areaX = areaX === 4 ? 3 : areaX;
        areaY = areaY === 4 ? 3 : areaY;
        for (let y = 0; y < 3; y += 1) {
            for (let x = 0; x < 3; x += 1) {
                areaArr.push(board[y + (areaY - 1) * 3][x + (areaX - 1) * 3]);
            }
        }
        // console.log(areaArr)
        // x축 확인
        numbers = numbers.filter((n) => !xArr.includes(n));
        // y축 확인
        numbers = numbers.filter((n) => !yArr.includes(n));
        // 3*3 확인
        numbers = numbers.filter((n) => !areaArr.includes(n));
        return numbers;
    }
    // * 배열 깊은 복사
    let newBoard = initBoard();
    // * 0 좌표 검색
    let target = [];
    for (let y = 0; y < 9; y += 1) {
        for (let x = 0; x < 9; x += 1) {
            if (target.length === 0 && board[y][x] === 0) {
                target = [y, x];
            }
        }
    }

    // * 모든 숫자가 들어와 있을 때 재귀 종료
    if (target.length === 0) return newBoard;

    let result = [];
    // * 삼중 필터 함수의 결과를 변수에 할당
    let numberArr = checknewBoard(target[0], target[1]);
    // * 삼중 필터 결과가 없으면 false 반환
    if (numberArr.length === 0) return false;
    // * 삼중 필터 결과만큼 반복문 실행
    // * numberArr = [4, 5]
    for (let el of numberArr) {
        // * 0 좌표에 하나의 숫자만 바꾸고 재귀
        // * target = [0, 0] >>>> [y, x]
        newBoard[target[0]][target[1]] = el;
        result = sudoku(newBoard);
        // * 마지막 좌표가 0이 아닐 경우 재귀 종료
        if (Array.isArray(result) && result[8][8] !== 0) return result;
    }
};

let boardt = [
    [0, 3, 0, 2, 6, 0, 7, 0, 1],
    [6, 8, 0, 0, 7, 0, 0, 9, 0],
    [1, 9, 0, 0, 0, 4, 5, 0, 0],
    [8, 2, 0, 1, 0, 0, 0, 4, 0],
    [0, 0, 4, 6, 0, 2, 9, 0, 0],
    [0, 5, 0, 0, 0, 3, 0, 2, 8],
    [0, 0, 9, 3, 0, 0, 0, 7, 4],
    [0, 4, 0, 0, 5, 0, 0, 3, 6],
    [7, 0, 3, 0, 1, 8, 0, 0, 0],
];
let output = sudoku(boardt);
console.log(output);
