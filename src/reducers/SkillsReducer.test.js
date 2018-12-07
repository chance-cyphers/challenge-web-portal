import skillsReducer from "./SkillsReducer";
import {addNewSkill} from "../actions/actions";

it('has initial state with no skills', () => {
    const state = skillsReducer(undefined, {});
    expect(state.skills.length).toBe(0);
});

it('adds skills for each ADD_NEW_SKILL action', () => {
    const state = skillsReducer(undefined, addNewSkill());
    expect(state.skills.length).toBe(1);

    const nextState = skillsReducer(state, addNewSkill());
    console.log(nextState.skills.length)
    expect(nextState.skills.length).toBe(2);
});