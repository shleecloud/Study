function solution(orders, course) {
    // TODO 조합하는 방법을 알아보자
    // TODO 손님들의 조합을 추출해서 문자열로 변환하는 함수
    const getCombinations = function (arr, selectNumber) {
        const results = [];
        // 고를 수 있는 숫자가 하나 남았을 때 나머지 숫자 하나를 요소로 가진 배열 리턴
        if (selectNumber === 1) return arr.map((value) => [value]);
        // 고를 수 있는 숫자가 두 개 이상이면 재귀함수로 하나가 남을 때까지 쪼갬
        arr.forEach((fixed, index, origin) => {
            const rest = origin.slice(index + 1);
            const combinations = getCombinations(rest, selectNumber - 1);
            // 쪼개서 경우의 수가 반환된 파편 배열을 fixed와 함께 합침
            const attached = combinations.map((combination) => [fixed, ...combination].join(''));
            results.push(...attached);
        });
        // 재귀적으로 selectNumber까지 합쳐짐
        return results;
    };

    // TODO 메인 로직
    orders = orders.map((el) => el.split('').sort());
    let resultArr = [];
    // * 코스만큼 반복
    for (let combo of course) {
        // * 코스당 나올 수 있는 경우의 수 추출
        let courseCase = [];
        for (let order of orders) {
            courseCase = courseCase.concat(getCombinations(order, combo));
        }
        // * 객체에 키값으로 할당
        let totalCombo = courseCase.reduce((acc, cur) => {
            acc[cur] ? (acc[cur] += 1) : (acc[cur] = 1);
            return acc;
        }, {});
        // * 반복된 수만큼 추출
        let maximum = 2;
        let courseList = [];
        for (let el in totalCombo) {
            if (maximum < totalCombo[el]) {
                maximum = totalCombo[el];
                courseList = [el];
            } else if (maximum === totalCombo[el]) {
                courseList.push(el);
            }
        }
        resultArr = resultArr.concat(...courseList);
    }
    return resultArr.sort();
}

console.log(solution(['XYZ', 'XWY', 'WXA'], [2, 3, 4]));
