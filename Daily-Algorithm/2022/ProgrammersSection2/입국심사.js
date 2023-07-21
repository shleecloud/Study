function solution(n, times) {
    // const perMin = times.map(el => el = 1/el)
    // const perMinsum = perMin.reduce((acc, cur) => acc = acc + cur)
    // console.log(perMinsum)
    // const sudo = (n/perMinsum - times[0])
    // let result = perMinsum / times[0]
    // console.log(sudo)

    // 오름차순 정렬
    times = times.sort((a, b) => a - b);
    // 최악의 경우, 가장 느린 사람에게 모두 검사받기
    let maximum = times[times.length - 1] * n; // 60
    // 최선의 경우, 가장 빠른 사람에게 모두 검사받기
    let minimum = 0; // 42
    // 최악과 최선의 중간에서 계산 시작
    let middle = Math.floor((maximum + minimum) / 2);
    // console.log(times)
    while (minimum <= maximum) {
        let totalResult = times.reduce((acc, cur) => {
            // 작업관 한 명당 주어진 시간안에 검사하는 사람의 합
            // 초기값 0이 없으면 times[0] 값이 나눗셈 없이 들어가게 되고 에러 발생
            return acc + Math.floor(middle / cur);
        }, 0);
        // 만약 예상한 사람보다 같거나 크다면 maximum 값을 middle-1로 하향
        if (totalResult >= n) {
            maximum = middle - 1;
        }
        // 만약 예상한 사람보다 적다면 minimum 값을 middle+1로 상향
        else {
            minimum = middle + 1;
        }
        middle = Math.floor((maximum + minimum) / 2);
    }

    return minimum;
}

let output = solution(6, [7, 10]);
console.log(output);
