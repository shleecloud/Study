// https://school.programmers.co.kr/learn/courses/30/lessons/154539
// https://velog.io/@sean2337/Programmers-%EB%92%A4%EC%97%90-%EC%9E%88%EB%8A%94-%ED%81%B0-%EC%88%98-%EC%B0%BE%EA%B8%B0-JavaScript
/* 
    ? 왜 스택을 썼는지
        * 처음 들어온 숫자를 비교하고
        * 이후 들어온 숫자를 순서대로 비교 
*/
function solution(numbers = []) {
    let result = new Array(numbers.length).fill(-1);
    let idxStack = [];

    for (let i = 0; i < numbers.length; i++) {
        while (
            !!idxStack && // stack이 비었는지 확인하고 비었으면 비교식 스킵
            numbers[idxStack.at(-1)] < numbers[i] // 새로운 숫자가 stack pop 예정 숫자보다 크면
        ) {
            result[idxStack.pop()] = numbers[i]; // stack pop 하고 '뒤에 있는 큰 수' 를 갱신
        }
        idxStack.push(i); // 다음 숫자를 스택에 추가
    }
    return result;
}

function naiveSolution(numbers = []) {
    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        let backBigNumber = -1;

        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] < numbers[j]) {
                backBigNumber = numbers[j];
                break;
            }
        }
        result.push(backBigNumber);
    }
    return result;
}

solution([2, 3, 3, 5]); // [3, 5, 5, -1]
console.log('🚀 ~ file: 뒤에 있는 큰 수 찾기.js:7 ~ solution([2, 3, 3, 5]); // [3, 5, 5, -1]:', solution([2, 3, 3, 5]));
