function solution(word) {
    const voca = ['A', 'E', 'I', 'O', 'U'];
    const visited = [];
    let stack = [...voca];
    let count = 0;
    let dict = '';
    while (stack.length !== 0) {
        let char = stack.shift();
        if (dict.length === 5) dict = dict.slice(0, -1);
        dict = dict + char;
        while (visited.includes(dict)) {
            dict = dict.slice(0, -1);
            dict = dict.slice(0, -1);
            dict = dict + char;
        }
        //console.log(count, dict)
        visited.push(dict);
        if (dict.length !== 5) stack = voca.concat(stack);
        count += 1;
        if (word === dict) break;
    }
    return count;
}
