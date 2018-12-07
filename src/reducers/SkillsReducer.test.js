import skillsReducer from "./SkillsReducer";
import {addNewSkill} from "../actions/actions";

it('has initial state with no skills', () => {
    const state = skillsReducer(undefined, {});
    expect(state.skills.length).toBe(0);
});

it('adds skills for each ADD_NEW_SKILL action', () => {
    const state = skillsReducer(undefined, addNewSkill("bob"));
    expect(state.skills.length).toBe(1);

    const nextState = skillsReducer(state, addNewSkill("steve"));
    console.log(nextState.skills.length)
    expect(nextState.skills.length).toBe(2);

    expect(nextState.skills[0].name).toBe("bob");
    expect(nextState.skills[1].name).toBe("steve");
});