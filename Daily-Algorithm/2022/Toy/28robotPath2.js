const robotPath2 = function (room, src, sDir, dst, dDir) {
    // TODO: 여기에 코드를 작성합니다.
    // * 완전 탐색과 DP
    // * 회전에 행동력 1, 직진에 행동력 1 소모하고 최종 목적지에 도달할 때 필요한 행동력 계산
    // * 위쪽이 1, 오른쪽이 2, 아래쪽이 3, 왼쪽이 4
    // * 특정 타일에 이동할 때 행동력을 저장한다.

    // TODO 회전할 때 방향 잡아주는 함수. 0,2번 인덱스는 왼쪽 오른쪽, 1번 인덱스는 뒤를 의미한다.
    function getRotate(dir) {
        let dirCase = [dir + 1, dir + 2, dir + 3];
        dirCase = dirCase.map((el) => (el = el > 4 ? el - 4 : el));
        return dirCase;
    }
    // TODO 회전한 로봇이 갈 수 있는지 확인
    function isCanGo(index, dir) {}

    // TODO 로봇이 움직이면서 지나온 좌표를 입력
    // * 만약 이전에 더 효율적으로 움직인 기록이 있으면 이동 생략
    function goRobot(index, dir, action) {
        const dirCase = getRotate(dir);
        for (let i = 0; i < dir.length; i += 1) {}
    }

    // TODO
};

room = [
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0],
    [1, 's', 0, 0, 0, 0],
];
src = [4, 2];
sDir = 1;
dst = [2, 2];
dDir = 3;
output = robotPath2(room, src, sDir, dst, dDir);
console.log(output); // --> 7
