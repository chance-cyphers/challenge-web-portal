import modalReducer, {NO_MODAL} from "./ModalReducer";
import {addNewSkill, openNewSkillModal} from "../actions/actions";


it('sets current modal to new skill modal', () => {
    const state = modalReducer(undefined, openNewSkillModal());
    expect(state.currentModal).toBe("NEW_SKILL_MODAL");
});

it('sets current modal to NO_MODAL on add new skill action', () => {
    const state = modalReducer({currentModal: "something"}, addNewSkill("a name"));
    expect(state.currentModal).toBe(NO_MODAL);
});