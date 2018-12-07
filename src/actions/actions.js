export const FETCH_RANDOM_SUCCESS = 'FETCH_RANDOM_SUCCESS';
export const FETCH_RANDOM_FAIL = 'FETCH_RANDOM_FAIL';
export const ADD_NEW_SKILL = "ADD_NEW_SKILL";
export const OPEN_NEW_SKILL_MODAL = "OPEN_NEW_SKILL_MODAL";

export function addNewSkill(name) {
    return {
        type: ADD_NEW_SKILL,
        name: name
    };
}

export function openNewSkillModal() {
    return {
        type: OPEN_NEW_SKILL_MODAL
    };
}

export function fetchRandomSuccess(num) {
    return {
        type: FETCH_RANDOM_SUCCESS,
        num: num
    };
}

export function fetchRandomFail(err) {
    return {
        type: FETCH_RANDOM_FAIL,
        err: err
    };
}