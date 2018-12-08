import modalReducer from "./ModalReducer";
import {addNewSkill, openNewSkillModal} from "../actions/actions";


it('initializes to no current modal', () => {
    const state = modalReducer(undefined, {});
    expect(state.currentModal).toBeNull();
});

it('sets current modal to new skill modal', () => {
    const state = modalReducer(undefined, openNewSkillModal());
    expect(state.currentModal).toBe("NEW_SKILL_MODAL");
});

it('sets current modal to null on add new skill action', () => {
    const state = modalReducer({currentModal: "something"}, addNewSkill());
    expect(state.currentModal).toBeNull();
});