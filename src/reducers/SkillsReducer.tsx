import {ADD_NEW_SKILL, ReduxAction} from "../actions/actions";

export interface Skill {
    readonly id: number
    readonly name: string
}

export interface SkillsState {
    skills: ReadonlyArray<Skill>
}

const initialState = {
    skills: []
};

export default function skillsReducer(state: SkillsState = initialState, action: ReduxAction): SkillsState {
    switch (action.type) {
        case ADD_NEW_SKILL:
            return {
                ...state,
                skills: [...state.skills, {name: action.name, id: 3}]
            };
        default:
            return state;
    }
}