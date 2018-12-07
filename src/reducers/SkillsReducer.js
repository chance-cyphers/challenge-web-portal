import {ADD_NEW_SKILL} from "../actions/actions";

const initialState = {
    skills: []
};

export default function skillsReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_NEW_SKILL:
            return {
                ...state,
                skills: [...state.skills, {}]
            };
        default:
            return state;
    }
}