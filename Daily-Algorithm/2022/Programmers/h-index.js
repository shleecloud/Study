function solution(citations) {
    citations = citations.sort((a, b) => a - b);
    let hIndex = citations.length;

    while (hIndex > 0) {
        if (citations[citations.length - hIndex] < hIndex) {
            hIndex -= 1;
        } else {
            return hIndex;
        }
    }
    return 0;
}

const citations = [3, 0, 6, 1, 5];
console.log(solution(citations));
// 3
