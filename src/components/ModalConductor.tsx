import React, {FC} from 'react';
import NewSkillModal from "./NewSkillModal";
import {NEW_SKILL_MODAL} from "../reducers/ModalReducer";

type Props = {
    currentModal: string
}

const ModalConductor: FC<Props> = props => {
    switch (props.currentModal) {
        case NEW_SKILL_MODAL:
            return <NewSkillModal {...props} />;
        default:
            return null;
    }
};

export default ModalConductor;