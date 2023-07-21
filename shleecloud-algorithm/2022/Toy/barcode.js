function barcode(len) {
    // 1, 2, 3
    // 1의 자식은 2, 3
    // 2의 자식은 1, 3
    // 3의 자식은 1, 2
    // 1. 부분수열이 없는 바코드를 만들기  ??
    if (len === 1) return '1';
    // * 2. 일단 만들고, 부분수열이 있는지 확인하기 OO
    // TODO 부분수열 확인 함수
    function isValid(str) {
        let halflen = Math.floor(str.length / 2);
        // 1, 2, 1, 3
        for (let i = 1; i <= halflen; i += 1) {
            // TODO 새로 추가된 숫자가 가장 뒤에 있음.
            // TODO 새로 추가된 숫자를 기준으로 부분수열이 없는지 확인한다.
            if (str.slice(-i) === str.slice(-i * 2, -i)) return false;
        }
        return true;
    }
    let char = '123';
    function dfs(str) {
        // TODO str의 길이가 len에 도달할 때까지 재귀하면서 자식을 추가
        if (str.length === len) return str;
        // TODO 추가할 수 있는 후보군(char='123') 만큼 반복문 실행
        for (let i = 0; i < char.length; i += 1) {
            // TODO 추가된 자식이 유효하지 않으면 무시
            if (!isValid(str + char[i])) continue;
            let temp = dfs(str + char[i]);
            if (temp !== null) return temp;
        }
        return null;
    }
    //   const aux = str => {
    //     if (str.length === len) return str;
    //     for (let i = 0; i < chr.length; i++) {
    //       if (isValid(str + chr[i])) {
    //         const founded = aux(str + chr[i]);
    //         if (founded !== null) return founded;
    //       }
    //     }
    //     return null;
    //   };
    return dfs(1);
}

output = barcode(20);
console.log(output); // "1213121"
