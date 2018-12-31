import {Skill} from "../reducers/SkillsReducer";

export const ADD_NEW_SKILL = "ADD_NEW_SKILL";
export const OPEN_NEW_SKILL_MODAL = "OPEN_NEW_SKILL_MODAL";
export const CREATE_SKILL_SUCCESS = 'CREATE_SKILL_SUCCESS';
export const CREATE_SKILL_FAILURE = 'CREATE_SKILL_FAILURE';


export type ReduxAction =
    | { type: typeof ADD_NEW_SKILL, name: string }
    | { type: typeof OPEN_NEW_SKILL_MODAL }
    | { type: typeof CREATE_SKILL_SUCCESS, skill: Skill }
    | { type: typeof CREATE_SKILL_FAILURE };


export function addNewSkill(name: string): ReduxAction {
    return {
        type: ADD_NEW_SKILL,
        name: name
    };
}

export function openNewSkillModal(): ReduxAction {
    return {
        type: OPEN_NEW_SKILL_MODAL
    };
}

export function createSkillSuccess(skill: Skill): ReduxAction {
    return {
        type: CREATE_SKILL_SUCCESS,
        skill: skill
    };
}

export function createSkillFailure(): ReduxAction {
    return {type: CREATE_SKILL_FAILURE};
}


