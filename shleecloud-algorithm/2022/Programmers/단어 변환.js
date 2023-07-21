function solution(begin, target, words) {
    // TODO 재귀 함수
    function findWord(begin, count, visited) {
        // * 재귀 탈출 조건
        if (begin === target) return count;

        // * 후보 단어 검색
        const queue = [];
        for (let word of words) {
            // * 이미 방문한 단어인지 확인
            if (visited.indexOf(word) !== -1) continue;
            if (begin === word) continue;
            // * 글자 단위로 1개 이하 일치하는지 확인
            let charCount = 0;
            for (let i = 0; i < word.length; i++) {
                if (word[i] !== begin[i]) charCount++;
                if (charCount === 2) break;
            }
            if (charCount === 2) continue;
            queue.push(word);
        }
        if (queue.length === 0) return 0;
        count += 1;
        let minimumCount = Infinity;
        // * 모든 queue를 돌아서 가장 작은 count값을 찾음
        for (let j = 0; j < queue.length; j++) {
            const newVisited = visited.slice();
            newVisited.push(queue[j]);
            // * 새로운 조건으로 재귀 실행
            const recursive = findWord(queue[j], count, newVisited);
            if (recursive < minimumCount) minimumCount = recursive;
        }
        if (minimumCount !== Infinity && minimumCount !== 0) return minimumCount;
        // else return 0;
    }

    const result = findWord(begin, 0, [begin]);
    return result ? result : 0;
}

console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']));
// console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']));
// "hit"	"cog"	["hot", "dot", "dog", "lot", "log", "cog"]
