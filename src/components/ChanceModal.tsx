import Modal from "react-modal";
import React, {FC} from "react";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const ChanceModal: FC = (props) => {
    return (
        <div>
            <Modal
                isOpen={true}
                style={customStyles}>
                {props.children}
            </Modal>
        </div>
    );
};

export default ChanceModal;
