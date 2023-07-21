const balancedBrackets = function (str) {
    // TODO: 여기에 코드를 작성합니다.
    let parenthesis = 0;
    let brace = 0;
    let bracket = 0;
    let current = '';
    // ! Count 방식으로 하니까 불필요한 조건문이 지나치게 많아진다.
    // ? Stack 방식으로 바꾸면 어떨까?
    const stack = [];
    for (let el = 0; el < str.length; el += 1) {
        switch (str[el]) {
            case '(':
                stack.push('(');
                break;
            case '{':
                stack.push('{');
                break;
            case '[':
                stack.push('[');
                break;
            case ')':
                if (stack.length === 0 || stack[stack.length - 1] !== '(') return false;
                stack.pop();
                break;
            case '}':
                if (stack.length === 0 || stack[stack.length - 1] !== '{') return false;
                stack.pop();
                break;
            case ']':
                if (stack.length === 0 || stack[stack.length - 1] !== '[') return false;
                stack.pop();
                break;
        }
    }
    if (stack.length === 0) return true;
    else return false;
};

console.log(balancedBrackets('()'));
