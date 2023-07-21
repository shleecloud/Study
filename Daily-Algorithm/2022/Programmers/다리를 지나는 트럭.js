function solution(bridge_length, weight, truck_weights) {
    const bridge = Array(bridge_length).fill(0);
    let time = 0;
    while (bridge.length) {
        bridge.shift();
        time++;
        if (truck_weights.length > 0) {
            let totalWeight = bridge.reduce((acc, cur) => (acc += cur));
            if (truck_weights[0] + totalWeight <= weight) {
                bridge.push(truck_weights.shift());
            } else {
                bridge.push(0);
            }
        }
    }
    return time;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
