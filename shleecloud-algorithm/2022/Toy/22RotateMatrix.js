const rotateMatrix = function (matrix, k = 1) {
    // TODO: 여기에 코드를 작성합니다.
    if (matrix.length === 0) return [];
    // * Advanced 반복을 위한 함수선언
    function rotate(matrix) {
        const x = matrix[0].length;
        const y = matrix.length;
        // * 배열 초기화
        const rotated = [];
        for (let i = 0; i < x; i += 1) {
            rotated.push(new Array());
        }
        // * 반복문으로 새로 만든 배열에 shift 메소드
        for (let i = 0; i < y; i += 1) {
            for (let j = 0; j < x; j += 1) {
                rotated[j].unshift(matrix[i][j]);
            }
        }
        return rotated;
    }
    // * Advanced 전달인자 k 만큼 회전
    for (let i = 0; i < k; i += 1) {
        matrix = rotate(matrix);
    }
    return matrix;
};

const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
];
// console.log(matrix[0][0]); // --> 1
// console.log(matrix[3][2]); // --> 15

const rotatedMatrix = rotateMatrix(matrix, 2);
console.log(rotatedMatrix);
// console.log(rotatedMatrix[0][0]); // --> 13
// console.log(rotatedMatrix[3][2]); // --> 8
