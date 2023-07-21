function solution(distance, rocks, n) {
    rocks = [0, ...rocks.sort((a, b) => a - b), distance];
    let left = 0,
        right = distance;

    while (left <= right) {
        let mid = Math.floor((right + left) / 2),
            count = 0,
            now = 0;

        // * 이분탐색 실행
        // ! 1부터 시작해야 0번 돌과 1번 돌의 거리를 계산할 수 있음
        for (let i = 1; i < rocks.length; i++) {
            if (rocks[i] - now < mid) {
                count++;
            } else {
                now = rocks[i];
            }
        }
        // * 이분탐색 판별
        if (count > n) right = mid - 1;
        else left = mid + 1;
    }

    return right;
}

// function solution(distance, rocks, n) {
//   let answer = 0;
//   rocks = [0, ...rocks.sort((a, b) => a - b), distance];

//   const BinarySearch = () => {
//     let start = 0;
//     let end = rocks[rocks.length - 1];

//     while (start <= end) {
//       let mid = Math.floor((start + end) / 2);
//       let count = 0,
//         now = 0;
//       for (let i = 1; i < rocks.length; i++) {
//         if (rocks[i] - now < mid) {
//           count++;
//         } else {
//           now = rocks[i];
//         }
//       }

//       if (count > n) {
//         end = mid - 1;
//       } else {
//         start = mid + 1;
//       }
//     }
//     answer = end;
//   };

//   BinarySearch();
//   return answer;
// }

// 4
console.log(solution(25, [2, 14, 11, 21, 17], 2));
