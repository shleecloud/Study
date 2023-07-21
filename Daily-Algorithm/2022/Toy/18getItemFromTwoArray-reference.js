// naive solution
// const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
//   let cnt = 0,
//     left = 0,
//     right = 0;
//   let target;
//   while (cnt < k) {
//     if (arr1[left] < arr2[right]) {
//       target = arr1[left];
//       left++;
//     } else {
//       target = arr2[right];
//       right++;
//     }
//     cnt++;
//   }
//   return target;
// };

// O(logK) solution
const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
    let leftIdx = 0,
        rightIdx = 0;

    // k번째 요소를 찾는 것 === 앞에서부터 k번 count했을 때의 요소
    // 이진 탐색법을 이용하기 위해 주어진 두 개의 배열(arr1, arr2)를 합치지 않고, k를 절반으로 나누어 각각의 배열에서 따로 count를 셉니다.
    while (k > 0) {
        let cnt = Math.ceil(k / 2); // cnt -> count라고 생각하시면 됩니다.
        // leftStep은 leftArr(arr1)의 count 할당량(k/2), rightStep은 rightArr(arr2)의 count 할당량(k/2)이라고 생각합니다.
        let leftStep = cnt,
            rightStep = cnt;

        // 엣지 케이스에 대한 if문 입니다.
        // 할당된 count가 아직 남았음에도 불구하고 현재 기준(Idx: cursor)이 arr1의 끝에 도달했을 때, 남아있는 k를 rightArr(arr2)에 배분합니다.
        if (leftIdx === arr1.length) {
            rightIdx = rightIdx + k;
            break;
        }
        // 위와 같은 if문 이며, 할당된 count가 아직 남았음에도 불구하고 현재 기준(Idx: cursor)이 arr2의 끝에 도달했을 때, 남아있는 k를 leftArr(arr1)에 배분합니다.
        if (rightIdx === arr2.length) {
            leftIdx = leftIdx + k;
            break;
        }

        // 엣지 케이스에 대한 if문입니다. 이 부분은 조금 어려울 수 있습니다! 주석을 꼼꼼히 읽어보세요.
        // TODO 현재 남아있는 count보다, 남아있는 요소(arr1.length - leftIdx: 현재 cursor 뒤에 있는, count 후보 요소들)가 적을 경우, leftStep(현재 할당량)을 남아있는 요소들의 개수로 바꿔줍니다.
        // * (앞의 요소는 이미 모두 count 되었고 남아있는 요소는 5개인데, 현재 남아있는 count수가 7개라면, 7개에서 5개으로 바꿔줘야겠죠?)
        if (cnt > arr1.length - leftIdx) leftStep = arr1.length - leftIdx;
        // 마찬가지로 현재 남아있는 count보다, 남아있는 요소(arr2.length - rightIdx: 현재 cursor 뒤에 있는, count 후보 요소들)가 적을 경우, rightStep(현재 할당량)을 남아있는 요소들의 개수로 바꿔줍니다.
        if (cnt > arr2.length - rightIdx) rightStep = arr2.length - rightIdx;

        // 본격적으로 count를 하는 로직입니다.
        // TODO 이진 탐색으로 가기 때문에, 두 배열의 현재 cursor(Idx)에서 현재 진행해야하는 count수(leftStep/rightStep)를 합친 index의 값을 비교합니다.
        // * (가장 첫 시행 때는, k가 100인 경우 두 배열의 50번째 Idx 값을 비교하게 되겠습니다. Idx는 0, Step은 50입니다.)
        // * 비교 후 그 값이 작은 배열은, 해당 값 앞의 요소에 대해서 다시 검사할 필요가 없습니다. count에 포함해도 되는, 비교된 큰 값보다 무조건 작은 값이기 때문입니다.
        // * 그러므로, 값이 작은 쪽의 배열의 cursor(Idx)를 옮겨줍니다. 다음 turn 부터는 cursor 이후로만 탐색합니다. 이러한 동작을 이진 탐색이라고 할 수 있겠습니다.
        // ! Right가 더 큰 경우, 작은 값은 무시된다.
        if (arr1[leftIdx + leftStep - 1] < arr2[rightIdx + rightStep - 1]) {
            leftIdx = leftIdx + leftStep;
            k = k - leftStep; // 한 번 처리가 끝나면, k값을 절반으로 떨어트립니다. (위의 "count에 포함해도 되는 무조건 작은 값이기 때문입니다."에 의해서, 후보군에서 떨어진 요소들은 무시하게되는 처리입니다.)
            // ! Left가 더 큰 경우, 작은 값은 무시된다.
        } else {
            // 반대의 경우 오른쪽 배열 arr2의 cursor가 옮겨 지겠군요.
            rightIdx = rightIdx + rightStep;
            k = k - rightStep;
        }
    }

    // while문을 끝내고 나왔을 때, 두 개의 배열은 조정된 cursor를 가질 것이고, 해당 값 중 더 큰 값이 k번째 요소일 것입니다. (k번째를 벗어나지 않습니다.)
    leftMax = arr1[leftIdx - 1] || -1; // or문으로 예외처리는 딱히 하지 않아도 상관 없습니다.
    rightMax = arr2[rightIdx - 1] || -1;

    return Math.max(leftMax, rightMax);
};

let arr1 = [1, 4, 8, 10, 15, 20, 25, 30];
let arr2 = [2, 3, 5, 9, 16, 26, 31, 32];
let result = getItemFromTwoSortedArrays(arr1, arr2, 10);
console.log(result); // --> 8
