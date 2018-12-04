

const initialState = { message: "hello world", count: 0 };

function placeholder(state = initialState, action) {
    switch(action.type) {
        case "PLACEHOLDER_ACTION":
            return {
                count: state.count + 1,
                message: "hello world: " + state.count
            };
        default:
            return state;
    }
}

export default placeholder;