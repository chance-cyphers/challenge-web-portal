import skillsReducer, {Skill, SkillsState} from "./SkillsReducer";
import {addNewSkill, createSkillFailure, createSkillSuccess} from "../actions/actions";
import {Cmd, loop} from "redux-loop";
import {createSkill} from "../side-effects/ChallengeClient";

const initialState = {skills: []};

it('dispatches createSkill effect when addNewSkill', () => {
    const result = skillsReducer(undefined, addNewSkill("bob"));

    expect(result).toEqual(loop(initialState, Cmd.run(createSkill, {
        successActionCreator: createSkillSuccess,
        failActionCreator: createSkillFailure,
        args: [{name: "bob"}]
    })));
});

it('adds skill to list on create success', () => {
    let createdSkill = {name: "michael", id: 4};
    const result = skillsReducer(undefined, createSkillSuccess(createdSkill));

    expect(result).toEqual({
        skills: [createdSkill]
    });
});