function solution(scores) {
    function getGrade(score) {
        if (score < 50) return 'F';
        else if (score < 70) return 'D';
        else if (score < 80) return 'C';
        else if (score < 90) return 'B';
        else return 'A';
    }

    function getAverage(scores, myScore) {
        let myScores = scores.slice();
        let max = Math.max(...myScores);
        let min = Math.min(...myScores);
        // 자신이 최고점 또는 최저점이면 제외
        if (myScore === max || myScore === min) {
            myScores.splice(myScores.indexOf(myScore), 1);
            // 제외한 이후 동일한 수를 포함하고 있을 경우 다시 포함
            if (myScores.includes(myScore)) {
                myScores.push(myScore);
            }
        }
        let total = myScores.reduce((acc, cur) => (acc += cur));
        return total / myScores.length;
    }

    let result = '';
    for (let i = 0; i < scores.length; i += 1) {
        let myTotal = [];
        let myScore = 0;
        let myAverage = 0;
        for (let j = 0; j < scores.length; j += 1) {
            // j 와 i 가 뒤바뀜. j->0, i-> 1~9까지 진행
            myTotal.push(scores[j][i]);
            if (i === j) myScore = scores[j][i];
        }
        myAverage = getAverage(myTotal, myScore);
        result += getGrade(myAverage);
    }
    return result;
}

solution([
    [80, 80, 80],
    [80, 80, 80],
    [80, 80, 80],
]);
