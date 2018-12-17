import {combineReducers} from "redux-loop";
import skillsReducer, {SkillsState} from "./SkillsReducer";
import modalReducer, {ModalState} from "./ModalReducer";

export interface RootState {
    skills: SkillsState
    modal: ModalState
}

let rootReducer = combineReducers({
    skills: skillsReducer,
    modal: modalReducer
});

export default rootReducer;