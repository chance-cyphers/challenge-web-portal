import {combineReducers} from "redux-loop";
import placeholder from "./PlaceholderReducer";
import skillsReducer from "./SkillsReducer";
import modalReducer from "./ModalReducer";

export default combineReducers({
    placeholder: placeholder,
    skills: skillsReducer,
    modal: modalReducer
})