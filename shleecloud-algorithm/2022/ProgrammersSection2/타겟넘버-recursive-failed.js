function solution(numbers, target) {
    function calcNumber(mark) {
        let count = numbers.reduce((acc, cur, idx) => {
            if (mark[idx] === '+') return (acc += cur);
            else return (acc -= cur);
        }, 0);
        return count === target;
    }
    let result = 0;
    let visited = [];
    function dfs(mark) {
        if (visited.includes(mark)) return;
        if (mark.length === numbers.length) {
            calcNumber(mark) ? (result += 1) : (result = result);
            return false;
        }

        visited.push(mark);
        dfs(mark + '+');
        dfs(mark + '-');
    }
    dfs('+');
    dfs('-');
    return result;
}

console.log(solution([1, 1, 1, 1, 1], 3));
