function solution(numbers, target) {
    // * 기호를 기반으로 합한 숫자가 target과 동일한지 확인
    function calcNumber(marks) {
        let count = numbers.reduce((acc, cur, idx) => {
            if (marks[idx] === '+') return (acc += cur);
            else return (acc -= cur);
        }, 0);
        return count === target;
    }
    let stack = ['-', '+'];
    let visitied = [];
    let acc = '';
    let result = 0;
    while (stack.length !== 0) {
        // ! 만약 다음에 입력한 결과가 이미 방문했다면 acc 문자를 하나 차감
        // ! 그래야 글자가 빠지면서 돌 수 있음
        if (!visitied.includes(acc + stack[stack.length - 1])) {
            // * 다음 결과가 겹치지 않을 때 stack에서 pop연산
            let cur = stack.pop();
            acc += cur;
            visitied.push(acc);
            if (!(acc.length === numbers.length)) {
                stack = stack.concat(['-', '+']);
            } else {
                if (calcNumber(acc)) result += 1;
                acc = acc.slice(0, -1);
            }
        } else {
            acc = acc.slice(0, -1);
        }
    }
    return result;
}

console.log(solution([1, 1, 1, 1, 1], 3));
