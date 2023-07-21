function solution(table, languages, preference) {
    var answer = '';
    // table 정리
    let scoreTable = [];
    table.map((cur) => {
        let tableArr = cur.split(' ');
        let head = tableArr[0];
        let tail = tableArr.slice(1).reverse();
        scoreTable.push([head, ...tail]);
    });
    // [SI, CONTENTS, HARDWARE, PORTAL, GAME]
    // 파트 점수 계산 함수 선언
    function scoreCalc(part) {
        let totalScore = 0;
        for (let i = 0; i < languages.length; i++) {
            let partScore = part.indexOf(languages[i]);
            if (partScore > 0) totalScore = totalScore + partScore * preference[i];
        }
        return totalScore;
    }

    // 파트 점수 계산
    const score = {SI: 0, CONTENTS: 0, HARDWARE: 0, PORTAL: 0, GAME: 0};
    console.log();
    for (let i = 0; i < 5; i++) {
        score[Object.keys(score)[i]] = scoreCalc(scoreTable[i]);
    }

    let scoreArr = Object.entries(score);
    let highestScore = scoreArr[0];
    for (let i = 0; i < 5; i++) {
        if (scoreArr[i][1] > highestScore[1]) highestScore = scoreArr[i];
        else if (scoreArr[i][1] === highestScore[1]) {
            highestScore = scoreArr[i] > highestScore ? highestScore : scoreArr[i];
        }
    }
    return highestScore[0];
}

let table = [
    'SI JAVA JAVASCRIPT SQL PYTHON C#',
    'CONTENTS JAVASCRIPT JAVA PYTHON SQL C++',
    'HARDWARE C C++ PYTHON JAVA JAVASCRIPT',
    'PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP',
    'GAME C++ C# JAVASCRIPT C JAVA',
];
console.log(solution(table, ['PYTHON', 'C++', 'SQL'], [7, 5, 5]));
