function connectedVertices(edges) {
    const verticies = {};

    for (let el of edges) {
        if (!verticies[el[0]]) verticies[el[0]] = [];
        verticies[el[0]].push(el[1]);
        if (!verticies[el[1]]) verticies[el[1]] = [];
        verticies[el[1]].push(el[0]);
    }

    function bfsFunction() {
        let isChanged = false;
        while (bfsQueue.length !== 0) {
            if (invitedArr.includes(bfsQueue[0])) {
                bfsQueue.shift();
                continue;
            } else {
                let nodes = verticies[bfsQueue[0]];
                for (let i = 0; i < nodes.length; i++) {
                    bfsQueue.push(nodes[i]);
                    invitedArr.push(bfsQueue[0]);
                }
                isChanged = true;
                bfsQueue.shift();
            }
        }
        if (isChanged) count++;
    }
    let count = 0;
    let invitedArr = [];
    let bfsQueue = [];
    let verticiesArr = Object.entries(verticies);
    let totalQueue = verticiesArr.map((el) => Number(el[0]));
    for (let i = 0; i < totalQueue.length; i++) {
        bfsQueue.push(totalQueue[i]);
        bfsFunction();
    }
    return count;
}

const result = connectedVertices([
    [1, 2],
    [3, 4],
]);
console.log(result);
