let fs = require('fs');
let input = fs.readFileSync('./contest/showmeInput1').toString().split('\n');
let count = input[0];
let numbers = [];

for (let i = 0; i < input.length; i++) {
    if (input[i] !== '') {
        numbers.push(input[i].split(' '));
    }
}

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
// ! 백준기준

const N = numbers.shift();
const values = numbers.shift().map((el) => Number(el));
const sales = {};
for (let i = 1; i <= N; i++) {
    sales[i] = [];
    const salesNum = numbers.shift()[0];
    for (let j = 0; j < salesNum; j++) {
        const salesArr = numbers.shift().map((el) => Number(el));
        sales[i].push(salesArr);
    }
}

function solution(values, sales) {
    let result = 0;
    const carts = [];
    // * 모든 물약 순회
    for (let i = 1; i < values.length + 1; i++) {
        const mostValuableIdx = getMostValuable(values, sales, carts);
        carts.push(mostValuableIdx);
        result += values[mostValuableIdx];
        for (let sale of sales[mostValuableIdx + 1]) {
            if (values[sale[0] - 1] < sale[1]) values[sale[0] - 1] = 1;
            else values[sale[0] - 1] -= sale[1];
        }
    }
    return result;
    // * 구매할 물약만큼 다시 순회
}

function getMostValuable(values, sales, carts) {
    const recentValueArr = Array(values.length).fill(-Infinity);
    // * 구매했을 때 가장 기대치가 높은 물약을 구함
    for (let j = 0; j < values.length; j++) {
        if (carts.includes(j)) continue;
        let recentValue = 0 - values[j];
        const recentSales = sales[j + 1];
        for (let sale of recentSales) {
            if (values[sale[0] - 1] < sale[1]) recentValue += values[sale[0] - 1] - 1;
            else recentValue += sale[1];
        }
        recentValueArr[j] = recentValue;
    }
    return recentValueArr.indexOf(Math.max(...recentValueArr));
}

console.log(solution(values, sales));
