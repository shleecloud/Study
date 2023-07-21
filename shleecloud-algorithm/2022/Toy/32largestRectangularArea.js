// https://sgc109.github.io/2021/03/18/largest-rectangle-in-histogram/
const largestRectangularArea = function (histogram) {
    // TODO: 여기에 코드를 작성합니다.
    // 언제 계산하냐면, 이 막대보다 작은 높이의 막대를 발견하는 즉시 계산해준다.
    // 왜냐하면 발견한 막대가 바로 앞서 스택에 넣었던 막대보다 오른쪽에 있으면서
    // 높이가 작은 가장 왼쪽 막대이기 때문이다.
    //  직사각형 넓이의 계산과 동시에 해당 막대는 스택에서 빼준다. 해당 막대를 높이로 하는 직사각형을 이미 계산했기 때문이다.
    // 이런 방식으로 스택을 관리해주면 자연스레 스택에 있는 막대들은 높이가 오름차순으로 정렬된 상태가 되며,
    // 스택 내에서 특정 막대의 바로 이전 막대는 그 막대보다 왼쪽에 있으면서 높이가 작은 가장 오른쪽 막대가 된다.
    //
    const stack = [];
    let maxSize = 0;
    for (let i = 0; i < histogram.length; i++) {
        stack.push(histogram[i]);
    }
};
