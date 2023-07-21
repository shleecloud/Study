// https://school.programmers.co.kr/learn/courses/30/lessons/181188
function solution(targets) {
    let missileIndex = 0;

    return targets
        .sort((a, b) => a[1] - b[1])
        .reduce((acc, cur) => {
            if (cur[0] >= missileIndex) {
                acc += 1;
                missileIndex = cur[1];
            }
            return acc;
        }, 0);
}
