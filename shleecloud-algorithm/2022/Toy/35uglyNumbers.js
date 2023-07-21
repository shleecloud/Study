const uglyNumbers = function (n) {
    const arrNum = [1];
    let multiple2ForMin = 0;
    let multiple3ForMin = 0;
    let multiple5ForMin = 0;
    let nextMinNum = 0;
    let index2 = 0;
    let index3 = 0;
    let index5 = 0;

    for (let j = 0; j < n; j += 1) {
        for (let i = 0; i < 3; i += 1) {
            multiple2ForMin = arrNum[index2] * 2;
            multiple3ForMin = arrNum[index3] * 3;
            multiple5ForMin = arrNum[index5] * 5;
            nextMinNum = Math.min(multiple2ForMin, multiple3ForMin, multiple5ForMin);
        }
        arrNum.push(nextMinNum);
        if (nextMinNum === multiple2ForMin) index2++;
        if (nextMinNum === multiple3ForMin) index3++;
        if (nextMinNum === multiple5ForMin) index5++;
    }

    return arrNum[arrNum.length - 2];
};

console.log(uglyNumbers(2));
