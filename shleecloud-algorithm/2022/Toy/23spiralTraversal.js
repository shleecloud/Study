const spiralTraversal = function (matrix) {
    // TODO: 여기에 코드를 작성합니다.
    let result = '';
    let rounds = Math.ceil(matrix.length / 2);
    let newMatrix = [];
    matrix.map((el) => newMatrix.push(el.slice()));

    for (let i = 0; i < rounds; i += 1) {
        if (newMatrix.length === 1) {
            result += newMatrix[0].join('');
            continue;
        }
        let up = newMatrix.shift().join('');
        let down = newMatrix.pop().reverse().join('');
        let left = '';
        let right = '';
        if (newMatrix.length >= 1) {
            for (let j = 0; j < newMatrix.length; j += 1) {
                left += newMatrix[newMatrix.length - 1 - j].splice(0, 1);
                right += newMatrix[j].splice(-1);
            }
        }
        result += up + right + down + left;
    }
    return result;
};

const matrix = [
    ['T', 'y', 'r', 'i'],
    ['i', 's', 't', 'o'],
    ['n', 'r', 'e', 'n'],
    ['n', 'a', 'L', ' '],
];
console.log(spiralTraversal(matrix));
