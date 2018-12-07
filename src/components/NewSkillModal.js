import Modal from "react-modal";
import React from "react";
import {connect} from "react-redux";
import {addNewSkill} from "../actions/actions";

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

class NewSkillModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        };

        this.createSkill = this.props.createSkill;
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onCreate = this.onCreate.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    onCreate() {
        this.createSkill();
        this.closeModal();
    }

    render() {
        return (
            <div>
                <button onClick={this.openModal}>New Skill</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}>

                    <p>WOOOOOOOooOoooooOO</p>
                    <button onClick={this.onCreate}>Create</button>
                </Modal>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createSkill: () => {
            dispatch(addNewSkill())
        }
    }
};

export default connect(null, mapDispatchToProps)(NewSkillModal);
