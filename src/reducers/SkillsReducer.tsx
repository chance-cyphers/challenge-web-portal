import {ADD_NEW_SKILL, ReduxAction} from "../actions/actions";

interface Skill {
    readonly name: string
}

interface State {
    skills: ReadonlyArray<Skill>
}

const initialState = {
    skills: []
};

export default function skillsReducer(state: State = initialState, action: ReduxAction): State {
    switch (action.type) {
        case ADD_NEW_SKILL:
            return {
                ...state,
                skills: [...state.skills, {name: action.name}]
            };
        default:
            return state;
    }
}