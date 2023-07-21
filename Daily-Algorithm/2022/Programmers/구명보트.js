function solution(people, limit) {
    people = people.sort((a, b) => a - b);
    let leftIdx = 0;
    let result = 0;
    // * 오름차순 정렬에서 가장 왼쪽에 있는 경우와 가장 오른쪽에 있는 무게를 합해서 limit와 비교
    // * limit안에 있을 경우 왼쪽 인덱스를 한 칸 움직이고 카운터를 추가
    // * limit를 초과할 경우 왼쪽 인덱스를 움직이지 않고 카운터를 추가
    for (let rightIdx = people.length - 1; leftIdx <= rightIdx; rightIdx--) {
        if (rightIdx === leftIdx) {
            result++;
            break;
        }
        if (people[leftIdx] + people[rightIdx] <= limit) {
            leftIdx++;
            result++;
        } else {
            result++;
        }
    }
    return result;
}

console.log(solution([70, 50, 80, 50], 100));
