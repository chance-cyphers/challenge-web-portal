import {
    ADD_NEW_SKILL, CREATE_SKILL_FAILURE,
    CREATE_SKILL_SUCCESS,
    createSkillFailure,
    createSkillSuccess,
    ReduxAction
} from "../actions/actions";
import {Cmd, Loop, loop, LoopReducer} from "redux-loop";
import {createSkill} from "../side-effects/ChallengeClient";

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

const skillsReducer: LoopReducer<SkillsState, ReduxAction> = (
    state: SkillsState = initialState,
    action: ReduxAction
): SkillsState | Loop<SkillsState, ReduxAction> => {
    switch (action.type) {
        case ADD_NEW_SKILL:
            return loop(state, Cmd.run(createSkill, {
                successActionCreator: createSkillSuccess,
                failActionCreator: createSkillFailure,
                args: [{name: action.name}]
            }));
        case CREATE_SKILL_SUCCESS:
            return {
                ...state,
                skills: [...state.skills, {name: action.skill.name, id: action.skill.id}]
            };
        default:
            return state;
    }
};

export default skillsReducer;