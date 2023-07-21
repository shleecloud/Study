function solution(genres, plays) {
    // * 장르별 우선순위 정렬
    const genreCounterObj = {};
    for (let i = 0; i < genres.length; i++) {
        let genre = genres[i];
        if (!genreCounterObj[genre]) genreCounterObj[genre] = 0;
        genreCounterObj[genre] += plays[i];
    }
    const genreCounterArr = [];
    for (let genreKey in genreCounterObj) {
        genreCounterArr.push([genreKey, genreCounterObj[genreKey]]);
    }
    genreCounterArr.sort((a, b) => b[1] - a[1]);

    // * 노래별 우선순위 정렬
    let result = Array.from(Array(genreCounterArr.length), () => []);
    for (let k = 0; k < result.length; k++) {
        const targetGenre = genreCounterArr[k][0];
        console.log(targetGenre);
        for (let l = 0; l < plays.length; l++) {
            if (genres[l] === targetGenre) {
                result[k].push(l);
            }
        }
        // * 재생 횟수가 동일한 경우 순서별 정렬
        result[k].sort((a, b) => plays[b] - plays[a]);
        // * 장르별 2곡까지만 표기
        if (result[k].length > 2) result[k].splice(2);
    }
    // * 배열 평탄화
    return result.flat();
}

let genres = ['classic', 'pop', 'classic', 'classic', 'pop'];
let plays = [500, 600, 150, 800, 2500];
//[4, 1, 3, 0]
console.log(solution(genres, plays));
