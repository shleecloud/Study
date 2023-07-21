const counterReducer = (state, action) => {
    switch (action.type) {
        case '@get':
            return state;
        case '@plus':
            return state + 1;
        case '@minus':
            return state - 1;
        default:
            return state;
    }
};

export default counterReducer;
