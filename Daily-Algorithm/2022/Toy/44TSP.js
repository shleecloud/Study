// 좌표평면 위의 두 점 사이의 거리를 계산하는 함수입니다.
function calculateDistance(p1, p2) {
    const yDiffSquared = Math.pow(p2[0] - p1[0], 2);
    const xDiffSquared = Math.pow(p2[1] - p1[1], 2);
    const dist = Math.sqrt(yDiffSquared + xDiffSquared);
    return Math.floor(dist * 100);
}

function getCombination(arr, selectNum) {
    if (selectNum === 1) return arr.map((el) => [el]);
    const result = [];
    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        const combination = getCombination(rest, selectNum - 1);
        const attached = combination.map((el) => [fixed, ...el]);
        result.push(...attached);
    });
    return result;
}

const TSP = function (places) {
    // TODO: 여기에 코드를 작성합니다.
    const combination = getCombination(places, places.length);
    const distances = combination.map((el) => {
        let totalDistance = 0;
        for (let i = 1; i < el.length; i++) {
            totalDistance += calculateDistance(el[i - 1], el[i]);
        }
        return totalDistance;
    });
    return Math.min(...distances);
};

const placesToVisit = [
    [0, 0],
    [3, 3],
    [-3, 3],
    [2, 3],
    [1, 3],
];

console.log(TSP(placesToVisit));
