import React from 'react';
import NewSkillModal from "./NewSkillModal";
import {NEW_SKILL_MODAL} from "../reducers/ModalReducer";

const ModalConductor = props => {
    switch (props.currentModal) {
        case NEW_SKILL_MODAL:
            return <NewSkillModal {...props} />;
        default:
            return null;
    }
};

export default ModalConductor;