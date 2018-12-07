import {ADD_NEW_SKILL, OPEN_NEW_SKILL_MODAL} from "../actions/actions";

export const NEW_SKILL_MODAL = "NEW_SKILL_MODAL";

const initialState = {
    currentModal: null
};

export default function modalReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_NEW_SKILL_MODAL:
            return {
                ...state,
                currentModal: NEW_SKILL_MODAL
            };
        case ADD_NEW_SKILL:
            return {
                ...state,
                currentModal: null
            };
        default:
            return state;
    }
}