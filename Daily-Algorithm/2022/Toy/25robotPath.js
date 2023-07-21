const robotPath = function (room, src, dst) {
    // TODO: 여기에 코드를 작성합니다.

    function validCheck(src, count) {
        // 경계선을 벗어난지 확인
        if (src[0] < 0 || src[0] >= room.length) return false;
        if (src[1] < 0 || src[1] >= room[0].length) return false;
        // 움직이려는 좌표가 막혔는지(1인지) 확인
        if (room[src[0]][src[1]] === 0 || room[src[0]][src[1]] > count) {
            return true;
        } else return false;
    }

    function moveRobot(index, count) {
        let y = index[0];
        let x = index[1];
        // 현재 좌표에 count값 할당
        room[y][x] = count;
        // 현재 좌표 기준 움직일 수 있는 방향 확인
        let queue = [];
        if (validCheck([y - 1, x], count + 1)) queue.push([y - 1, x]);
        if (validCheck([y + 1, x], count + 1)) queue.push([y + 1, x]);
        if (validCheck([y, x - 1], count + 1)) queue.push([y, x - 1]);
        if (validCheck([y, x + 1], count + 1)) queue.push([y, x + 1]);
        for (let el of queue) {
            moveRobot([el[0], el[1]], count + 1);
        }
    }
    moveRobot(src, 1);
    return room[dst[0]][dst[1]] - 1;
};

const room = [
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 0],
];
const src = [4, 2];
const dst = [2, 2];
robotPath(room, src, dst);
console.log(robotPath(room, src, dst)); // 8
