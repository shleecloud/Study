// https://school.programmers.co.kr/learn/courses/30/lessons/181187

function solution(r1, r2) {
    let counter = 0;

    for (let x = 1; x <= r2; x++) {
        const maxY = Math.floor(Math.sqrt(r2 ** 2 - x ** 2));
        const minY = x <= r1 ? Math.ceil(Math.sqrt(r1 ** 2 - x ** 2)) : 0;

        counter += maxY - minY + 1;
    }

    return counter * 4;
}

console.log(solution(2, 3) === 20);
