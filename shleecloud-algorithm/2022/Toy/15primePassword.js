const primePassword = (curPwd, newPwd) => {
    // TODO: 여기에 코드를 작성합니다.
    // * 소수인지 확인
    function isPrimeNumber(n) {
        // 배열이라면 숫자로 전환
        let num = Number(n.join(''));
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    function numberToArr(a) {
        let curArr = String(a).split('');
        return curArr.map((el) => Number(el));
    }

    let visited = new Array(10000).fill(false);
    let queue = [[numberToArr(curPwd), 0]];

    while (queue.length !== 0) {
        let a = queue.pop();
        let numArr = a[0];
        // numArr = [1, 0, 0, 7]

        // TODO 현재 비밀번호와 newPwd가 동일한 경우 함수를 종료, count를 반환
        if (Number(numArr.join('')) === newPwd) return a[1];
        // TODO 경우의 수를 찾기 위해서 반복문 실행
        for (let i = 0; i < 4; i += 1) {
            for (let j = 0; j < 10; j += 1) {
                let count = a[1];
                // TODO 새로운 숫자가 원본과 동일하면 무시 (continue)
                if (numArr[i] === j) continue;
                let copyArr = numArr.slice();
                // 1007 -> 0007
                // numArr = 1007
                // numArr[0] === 1
                // TODO 숫자 하나만 바꿔봄
                copyArr[i] = j;
                // * 바꿔봤는데 1000이하거나 중복이면 무시 (continue)
                if (copyArr[0] === 0 || visited[Number(copyArr.join(''))] === true) continue;
                visited[Number(copyArr.join(''))] = true;
                // * 변경된 수가 소수가 아니라면 무시 (continue)
                if (!isPrimeNumber(copyArr)) continue;
                // TODO 소수 맞으면 숫자 하나만 바꾼 수 Queue 추가
                queue.unshift([copyArr, (count += 1)]);
            }
        }
    }
    return -1;
};

output = primePassword(1009, 1171);
console.log(output);
