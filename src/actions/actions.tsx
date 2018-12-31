import {Skill} from "../reducers/SkillsReducer";

export const ADD_NEW_SKILL = "ADD_NEW_SKILL";
interface AddNewSkill {
    type: typeof ADD_NEW_SKILL,
    name: string
}
export function addNewSkill(name: string): AddNewSkill {
    return {
        type: ADD_NEW_SKILL,
        name: name
    };
}


export const OPEN_NEW_SKILL_MODAL = "OPEN_NEW_SKILL_MODAL";
interface OpenNewSkillModal {
    type: typeof OPEN_NEW_SKILL_MODAL
}
export function openNewSkillModal(): OpenNewSkillModal {
    return {
        type: OPEN_NEW_SKILL_MODAL
    };
}


export const CREATE_SKILL_SUCCESS = 'CREATE_SKILL_SUCCESS';
interface CreateSkillSuccess {
    type: typeof CREATE_SKILL_SUCCESS,
    skill: Skill
}
export function createSkillSuccess(skill: Skill): ReduxAction {
    return {
        type: CREATE_SKILL_SUCCESS,
        skill: skill
    };
}


export const CREATE_SKILL_FAILURE = 'CREATE_SKILL_FAILURE';
interface CreateSkillFailure {
    type: typeof CREATE_SKILL_FAILURE
}
export function createSkillFailure(): ReduxAction {
    return {type: CREATE_SKILL_FAILURE};
}


export const FETCH_RANDOM_SUCCESS = 'FETCH_RANDOM_SUCCESS';
interface FetchRandomSuccess {
    type: typeof FETCH_RANDOM_SUCCESS,
    num: number
}
export function fetchRandomSuccess(num: number): FetchRandomSuccess {
    return {
        type: FETCH_RANDOM_SUCCESS,
        num: num
    };
}


export const FETCH_RANDOM_FAIL = 'FETCH_RANDOM_FAIL';
interface FetchRandomFail {
    type: typeof FETCH_RANDOM_FAIL,
    err: string
}
export function fetchRandomFail(err: string): FetchRandomFail {
    return {
        type: FETCH_RANDOM_FAIL,
        err: err
    };
}

export type ReduxAction = AddNewSkill
    | OpenNewSkillModal
    | FetchRandomSuccess
    | FetchRandomFail
    | CreateSkillSuccess
    | CreateSkillFailure;