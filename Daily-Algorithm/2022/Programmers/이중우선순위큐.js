function solution(operations) {
    const queue = [];
    for (const operation of operations) {
        const [command, value] = operation.split(' ');
        if (command === 'I') {
            queue.push(Number(value));
            queue.sort((a, b) => a - b);
        } else {
            if (value === '1') {
                queue.pop();
            } else {
                queue.shift();
            }
        }
    }
    if (answer.length === 0) return [0, 0];
    else return [queue[queue.length - 1], queue[0]];
}

console.log(
    solution([
        'I 16', //
        'I -5643',
        'D -1',
        'D 1',
        'D 1',
        'I 123',
        'D -1',
    ]),
);
