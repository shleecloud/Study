const createMatrix = (village) => {
    const matrix = [];
    village.forEach((line) => {
        matrix.push(line.split(''));
    });
    return matrix;
};

const gossipProtocol = function (village, row, col) {
    // TODO: 여기에 코드를 작성합니다.

    // TODO: 모든 작업이 완료되었는지 확인
    function isComplete(matrix) {
        for (let i = 0; i < matrix.length; i += 1) {
            if (matrix[i].includes('1')) return false;
        }
        return true;
    }

    // TODO: 인접한 집에 소문이 퍼지는 함수
    function spread(matrix) {
        const newMatrix = [];
        // 2차원 복사
        for (let el of matrix) newMatrix.push(el.slice());
        // 한칸씩 돌면서 전환
        for (let i = 0; i < matrix.length; i += 1) {
            let temp = 0;
            let j = matrix[i].indexOf('x', temp);
            while (j !== -1) {
                // 좌우상하
                if (!!matrix[i][j + 1] && matrix[i][j + 1] === '1') newMatrix[i][j + 1] = 'x';
                if (!!matrix[i][j - 1] && matrix[i][j - 1] === '1') newMatrix[i][j - 1] = 'x';
                if (!!matrix[i + 1] && matrix[i + 1][j] === '1') newMatrix[i + 1][j] = 'x';
                if (!!matrix[i - 1] && matrix[i - 1][j] === '1') newMatrix[i - 1][j] = 'x';
                // while문 반복
                temp = j + 1;
                j = matrix[i].indexOf('x', temp);
            }
        }
        return newMatrix;
    }

    let matrix = createMatrix(village);
    matrix[row][col] = 'x';
    let count = 0;
    while (!isComplete(matrix)) {
        matrix = spread(matrix);
        count += 1;
    }
    return count;
};

const village = [
    '0010', //
    '0111',
    '0101',
    '1101',
    '1111',
];
const row = 1;
const col = 1;
let output = gossipProtocol(village, row, col);
console.log(output); // --> 5
