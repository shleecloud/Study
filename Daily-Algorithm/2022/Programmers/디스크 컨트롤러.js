function solution(jobs) {
    let answer = 0,
        jobsIdx = 0,
        timer = 0;
    jobs.sort((a, b) => a[0] - b[0]);

    const priorityQueue = [];
    while (jobsIdx < jobs.length || priorityQueue.length > 0) {
        // * timer가 흐른만큼 priorityQueue 배열에 push, jobsIdx 진행
        // * jobs[jobsIdx][0] 값이 timer보다 작을 때까지 반복
        if (jobsIdx < jobs.length && jobs[jobsIdx][0] <= timer) {
            priorityQueue.push(jobs[jobsIdx]);
            jobsIdx++;
            priorityQueue.sort((a, b) => a[1] - b[1]);
            continue;
        }
        // * 우선순위 큐에서 하나씩 값을 빼면서 timer, answer 값 변경
        if (priorityQueue.length > 0) {
            timer += priorityQueue[0][1];
            answer += timer - priorityQueue[0][0];
            priorityQueue.shift();
        } else {
            timer = jobs[jobsIdx][0];
        }
    }
    return parseInt(answer / jobs.length);
}

// function solution(jobs) {
//   // 작업이 빨리 끝나는 순서대로 정렬
//   // jobs.sort((a, b) => b[1] - a[1]);
//   let timer = 0;
//   let count = 0;
//   let jobsFilter = Array(jobs.length)
//     .fill(0)
//     .map((el, idx) => jobs[idx]);
//   for (let i = 0; i < jobs.length; i++) {
//     let currentJobs = jobsFilter.filter((el) => el[0] <= timer);
//     if (currentJobs.length === 0) {
//       i--;
//       continue;
//     }
//     let minTimeJobIdx = currentJobs.reduce((acc, cur, idx, arr) => {
//       if (arr[acc][1] > cur[1]) return idx;
//       else return acc;
//     }, 0);
//     let jobStart = currentJobs[minTimeJobIdx][0];
//     let jobTimer = currentJobs[minTimeJobIdx][1];
//     count += timer - jobStart + jobTimer;
//     timer += jobTimer;
//     jobsFilter = jobsFilter.filter((el, idx, arr) => idx !== minTimeJobIdx);
//   }
//   return count / jobs.length;
// }

console.log(
    solution([
        [0, 3],
        [1, 9],
        [2, 6],
    ]),
); // 9
