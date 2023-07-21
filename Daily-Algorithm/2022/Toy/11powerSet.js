const powerSet = function (str) {
    // 정렬
    const sorted = str.split('').sort();

    // 중복 제거
    const deduplicated = [...new Set(sorted)];

    let subSets = [];
    const pickOrNot = (idx, subset) => {
        // TODO Case 1의 경우 최초 할당된 subset 그대로 idx 끝까지 도달
        // * 가장 처음 Case 1만 반복할 경우 빈 문자열로 끝까지 도달
        // TODO Case 2의 경우 문자가 1개 추가된 채로 끝까지 도달
        // * Case 2 이후 Case 1 재귀가 반복될 경우 문자 2개인채로 끝까지 도달
        // * Case 2 이후 Case 2만 반복할 경우 모든 문자열이 포함된 채로 끝까지 도달
        if (idx === deduplicated.length) {
            subSets.push(subset);
            return;
        }

        // TODO Case1 : subset 초기 문자만 포함
        pickOrNot(idx + 1, subset);

        // TODO Case2 : subset 초기 문자와 idx번째 문자 포함
        pickOrNot(idx + 1, subset + deduplicated[idx]);
    };

    pickOrNot(0, '');
    return subSets.sort();
};
