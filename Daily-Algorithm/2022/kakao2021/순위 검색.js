function solution(info, query) {
    // * 조합 만드는 함수 선언
    function getCombination(arr, score, map, start) {
        const key = arr.join('');
        if (Array.isArray(map[key])) map[key].push(score);
        else map[key] = [score];

        for (let i = start; i < arr.length; i++) {
            let combiArr = arr.slice();
            combiArr[i] = '-';
            getCombination(combiArr, score, map, i + 1);
        }
    }

    // * 이분 탐색 함수 선언
    function binarySearch(arr, score) {
        // 쿼리 결과가 없을 경우 예외 처리
        if (!arr) return 0;
        let left = 0;
        let right = arr.length;
        while (left < right) {
            // let mid = left + Math.floor((right - left) / 2);
            let mid = Math.floor((left + right) / 2);
            // ! 초과로 구할 경우의 수식.
            // ! 조건문으로 미만과 초과를 구분할 수 있다.
            // if (arr[mid] > score) right = mid;
            // else left = mid + 1;
            if (arr[mid] >= score) right = mid;
            else left = mid + 1;
        }
        // console.log(arr, score, left, right);
        return arr.length - left;
    }

    // * 조합 만들기
    const map = {};
    for (let i = 0; i < info.length; i++) {
        const infos = info[i].split(' ');
        const score = infos.pop();
        getCombination(infos, score, map, 0);
    }

    // * 조합 내의 점수 배열 정렬
    for (let key in map) map[key].sort((a, b) => a - b);

    // * 점수 찾기
    const result = [];
    for (let i = 0; i < query.length; i++) {
        let queryString = query[i].replace(/ and /g, '').split(' ');
        let queryScore = Number(queryString.pop());
        queryString = queryString.join('');
        let scoreIdx = binarySearch(map[queryString], queryScore);
        result.push(scoreIdx);
        // if (Array.isArray(map[queryString])) {
        //   let scoreCount = map[queryString].length - scoreIdx;
        //   result.push(scoreCount);
        // } else result.push(0);
    }

    return result;
}

const info = [
    'java backend junior pizza 150',
    'python frontend senior chicken 210',
    'python frontend senior chicken 150',
    'cpp backend senior pizza 260',
    'java backend junior chicken 80',
    'python backend senior chicken 50',
];
const querys = [
    'java and backend and junior and pizza 100',
    'python and frontend and senior and chicken 200',
    'cpp and - and senior and pizza 250',
    '- and backend and senior and - 150',
    '- and - and - and chicken 100',
    '- and - and - and - 150',
];

console.log(solution(info, querys));
