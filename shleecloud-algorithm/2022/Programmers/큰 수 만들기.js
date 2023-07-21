function solution(number, k) {
    const stack = [];

    for (let i = 0; i < number.length; i++) {
        const target = number[i];

        while (k > 0 && stack[stack.length - 1] < target) {
            stack.pop();
            k--;
        }
        stack.push(target);
    }
    // 한 번도 stack.pop이 일어나지 않은 경우 splice로 잘라준다.
    // ex) 654321, 1
    stack.splice(stack.length - k, k);
    return stack.join('');
}

// function wrong_solution(number, k) {
//   // * 가장 큰 수의 인덱스를 찾는 함수 선언
//   function findMaxNumIdx(number) {
//     let maxNumIdx = 0;
//     for (let i = 0; i < number.length; i++) {
//       if (number[maxNumIdx] < number[i]) maxNumIdx = i;
//     }
//     return maxNumIdx;
//   }

//   let result = '';
//   let totalLength = number.length - k;
//   let idx = 0;
//   for (let i = 0; i < totalLength; i++) {
//     let maxNumIdx = findMaxNumIdx(number.slice(idx, totalLength + i));
//     result += number[idx + maxNumIdx];
//     idx += maxNumIdx + 1;
//   }
//   return result;
// }

// console.log(solution('1924', 2)); // 94
// console.log(solution('1231234', 3)); // 3234
console.log(solution('654321', 5)); // 775841
