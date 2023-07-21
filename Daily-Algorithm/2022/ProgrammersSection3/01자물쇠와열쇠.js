function solution(key, lock) {
    // TODO: 2차원 배열 복사
    function copyArr(arr) {
        let result = [];
        arr.map((el) => result.push(el.slice()));
        return result;
    }

    // TODO: 회전
    function rotateKey(arr) {
        let result = Array.from({length: arr.length}, () => []);
        for (let i = 0; i < arr.length; i += 1) {
            for (let j = 0; j < arr.length; j += 1) {
                result[i].unshift(arr[j][i]);
            }
        }
        return result;
    }

    // TODO: 열쇠와 자물쇠를 확인
    function checkKey(key, index) {
        let copyLock = copyArr(newLock);
        // * 새로운 키 대입
        for (let i = 0; i < key.length; i += 1) {
            for (let j = 0; j < key.length; j += 1) {
                // * 해당 좌표에 Null 값이 있으면 무시
                if (copyLock[i + index[0]][j + index[1]] === null) continue;
                // * 해당 좌표 값과 키의 값이 동일하면 실패 반환 (ex)00,11
                if (copyLock[i + index[0]][j + index[1]] === key[i][j]) return false;
                copyLock[i + index[0]][j + index[1]] += key[i][j];
            }
        }
        // * 자물쇠 부분만큼 정합성 검사
        for (let i = 0; i < copyLock.length; i += 1) {
            for (let j = 0; j < copyLock.length; j += 1) {
                if (copyLock[i][j] === 0 || copyLock[i][j] === 2) return false;
            }
        }
        return true;
    }
    //
    // TODO: 자물쇠를 열쇠 크기에 비례해서 확장시킴
    let newLockLength = lock.length + (key.length - 1) * 2;
    let newLock = Array.from({length: newLockLength}, () => Array.from({length: newLockLength}, () => null));
    for (let i = 0; i < lock.length; i += 1) {
        for (let j = 0; j < lock.length; j += 1) {
            newLock[key.length - 1 + i][key.length - 1 + j] = lock[i][j];
        }
    }
    // TODO: 열쇠 회전 4회 반복
    let copyKey = copyArr(key);
    for (let k = 0; k < 4; k += 1) {
        copyKey = rotateKey(copyKey);
        // TODO: 확장된 자물쇠 완전 탐색
        for (let i = 0; i < newLock.length - key.length + 1; i += 1) {
            for (let j = 0; j < newLock.length - key.length + 1; j += 1) {
                if (checkKey(copyKey, [i, j])) return true;
            }
        }
    }

    return false;
}

// let keys = [
//   [1, 1, 1],
//   [1, 1, 1],
//   [1, 1, 1],
// ];
// let newLockLength = 4;
// let newLock = Array.from({ length: newLockLength }, () => Array.from({ length: newLockLength }, () => 0));
// newLock[1][1] = 0;
// newLock[1][2] = 0;
// newLock[2][1] = 0;
// newLock[2][2] = 0;
// console.log(solution(keys, newLock));
console.log(
    solution(
        [
            [0, 0, 0],
            [1, 0, 0],
            [0, 1, 1],
        ],
        [
            [1, 1, 1],
            [1, 1, 0],
            [1, 0, 1],
        ],
    ),
);
