import {loop, Cmd} from "redux-loop";
import {fetchData} from "../side-effects/placeholder-effects";
import {FETCH_RANDOM_FAIL, FETCH_RANDOM_SUCCESS, fetchRandomFail, fetchRandomSuccess} from "../actions/actions";


const initialState = {message: "hello world", count: 0, num: 0};

function placeholder(state = initialState, action) {
    switch (action.type) {
        case "PLACEHOLDER_ACTION":
            return loop(state, Cmd.run(fetchData, {
                successActionCreator: fetchRandomSuccess,
                failActionCreator: fetchRandomFail,
                args: [12]
            }));
        case FETCH_RANDOM_SUCCESS:
            return {
                ...state,
                num: action.num,
                message: "num: " + action.num
            };
        case FETCH_RANDOM_FAIL:
            return {
                ...state,
                err: action.err,
                message: "error: " + action.err
            };
        default:
            return state;
    }
}

export default placeholder;