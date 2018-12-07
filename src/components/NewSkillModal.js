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
            modalIsOpen: false,
            skillName: ""
        };

        this.createSkill = this.props.createSkill;
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onCreate = this.onCreate.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    openModal() {
        this.setState({
            ...this.state,
            modalIsOpen: true,
            skillName: ""
        });
    }

    closeModal() {
        this.setState({...this.state, modalIsOpen: false});
    }

    onCreate() {
        this.createSkill(this.state.skillName);
        this.closeModal();
    }

    handleNameChange(event) {
        this.setState({
            ...this.state,
            skillName: event.target.value
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.openModal}>New Skill</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}>

                    <label>
                        Skill Name:
                        <input type="text" value={this.state.skillName} onChange={this.handleNameChange}/>
                    </label>
                    <button onClick={this.onCreate}>Create</button>
                </Modal>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createSkill: (name) => {
            dispatch(addNewSkill(name))
        }
    }
};

export default connect(null, mapDispatchToProps)(NewSkillModal);
