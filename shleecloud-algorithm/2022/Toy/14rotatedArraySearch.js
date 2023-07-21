function rotatedArraySearch(rotated, target) {
    const isLeft = rotated[0] <= target;
    let left = 0;
    let right = rotated.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        // * middle에 일치하는 경우 값 반환
        if (rotated[middle] === target) return middle;

        // TODO middle 인덱스를 기준으로 어느 쪽이 정렬되어 있는가?
        // ! 정렬된 쪽에서 이진탐색을 실행한다.
        // ? 일반적으로 left보다 middle이 더 크다. 왼쪽 섹션에 middle이 있는 경우.
        if (rotated[left] < rotated[middle]) {
            // * middle과 left를 기준으로 이진탐색을 실행
            // * 일반적인 기준으로 middle이 right가 된 케이스
            if (target < rotated[middle] && rotated[left] <= target) right = middle - 1;
            else left = middle + 1;
        }
        // ? left보다 middle이 더 작다. 즉 오른쪽 섹션에 middle이 있는 경우.
        else {
            // * middle과 right를 기준으로 이진탐색을 실행
            // * 일반적인 기준으로 middle이 left가 된 케이스
            if (target <= rotated[right] && rotated[middle] <= target) left = middle + 1;
            else right = middle - 1;
        }
    }

    return -1;
}
