function barcode(len) {
    // TODO: 여기에 코드를 작성하세요.
    const numObj = {
        1: [2, 3],
        2: [1, 3],
        3: [1, 2],
    };
    function isEqualSubset(arr) {
        // console.log(arr)
        for (let el = 1; el * 2 <= arr.length; el++) {
            let str1 = arr.slice(0, el).join('');
            let str2 = arr.slice(el, el * 2).join('');
            if (arr.length % 2 === 1) str2 = arr.slice(el + 1, el * 2 + 1).join('');
            // console.log(el)
            //console.log(str1 + ' ' + str2)
            if (str1 === str2) return true;
        }
        return false;
    }
    let barcode = [1];
    for (let i = 0; i < len - 1; i++) {
        let latestNum = barcode[0];
        barcode.unshift(numObj[latestNum][0]);
        if (!isEqualSubset(barcode)) continue;
        barcode[0] = numObj[latestNum][1];
    }
    return barcode.join('');
}
