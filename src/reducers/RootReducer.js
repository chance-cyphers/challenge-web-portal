import {combineReducers} from "redux-loop";
import placeholder from "./PlaceholderReducer";
import skillsReducer from "./SkillsReducer";

export default combineReducers({
    placeholder: placeholder,
    skills: skillsReducer
})