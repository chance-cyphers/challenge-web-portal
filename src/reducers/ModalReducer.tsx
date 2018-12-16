import {ADD_NEW_SKILL, OPEN_NEW_SKILL_MODAL, ReduxAction} from "../actions/actions";

export const NEW_SKILL_MODAL = "NEW_SKILL_MODAL";
export const NO_MODAL = "NO_MODAL";

const initialState = {
    currentModal: NO_MODAL
};

interface State {
    readonly currentModal: string
}

export default function modalReducer(state: State = initialState, action: ReduxAction): State {
    switch (action.type) {
        case OPEN_NEW_SKILL_MODAL:
            return {
                ...state,
                currentModal: NEW_SKILL_MODAL
            };
        case ADD_NEW_SKILL:
            return {
                ...state,
                currentModal: NO_MODAL
            };
        default:
            return state;
    }
}