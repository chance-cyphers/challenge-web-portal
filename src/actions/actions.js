export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export function fetchSuccess(num) {
    return {
        type: FETCH_SUCCESS,
        num: num
    };
}

export function fetchFail(err) {
    return {
        type: FETCH_FAIL,
        err: err
    };
}