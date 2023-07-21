function solution(n, lost, reserve) {
    // 잃어버린 체육복 수만큼 반복문
    // 여벌의 체육복을 받을 수 있는지 확인
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);

    reserve.forEach((el, idx) => {
        let lostIndex = lost.findIndex((target) => el === target);
        if (lostIndex !== -1) {
            lost[lostIndex] = 999;
            reserve[idx] = 9999;
        }
    });

    reserve.forEach((el) => {
        let lostIndex = lost.findIndex((target) => el === target - 1 || el === target + 1);
        if (lostIndex !== -1) lost[lostIndex] = 999;
    });

    return n - lost.filter((el) => el !== 999).length;
}
