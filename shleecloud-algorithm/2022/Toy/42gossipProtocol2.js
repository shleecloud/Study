const createMatrix = (village) => {
    const matrix = [];
    village.forEach((line) => {
        const row = [];
        for (let i = 0; i < line.length; i++) row.push(line[i]);
        matrix.push(row);
    });
    return matrix;
};

const gossipProtocol2 = function (village, num) {
    // TODO: 여기에 코드를 작성합니다.
    if (village.length === 0) return 0;

    // TODO: 완전 탐색으로 정보 전달원을 확인
    const getGossip = function () {
        const gossipMember = [];
        for (let row = 0; row < village.length; row++) {
            for (let col = 0; col < village[0].length; col++) {
                if (village[row][col] === 2) {
                    gossipMember.push([row, col]);
                }
            }
        }
        return gossipMember;
    };

    // TODO: 정보 전달원의 좌표를 기준으로 정보를 퍼트림
    const setGossip = function ([row, col]) {
        if (!!village[row][col + 1] && village[row][col + 1] === '1') village[row][col + 1] = '2';
        if (!!village[row][col - 1] && village[row][col - 1] === '1') village[row][col - 1] = '2';
        if (!!Array.isArray(village[row + 1]) && village[row + 1][col] === '1') village[row + 1][col] = '2';
        if (!!Array.isArray(village[row - 1]) && village[row - 1][col] === '1') village[row - 1][col] = '2';
    };

    // TODO: 아직 전달하지 않은 집이 있는지 확인
    const getVillage = function () {
        for (let row = 0; row < village.length; row++) {
            if (village[row].includes('1')) return true;
        }
        return false;
    };

    let count = 0;
    while (getVillage()) {
        const gossipMember = getGossip();
        for (let mem of gossipMember) setGossip(mem);
        count += 1;
    }
    return count;
};

village = ['1001212', '1201011', '1102001', '2111102', '0012111', '1111101', '2121102'];
num = 5;
output = gossipProtocol2(village, num);
console.log(output); // --> 3
