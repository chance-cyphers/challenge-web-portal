import React from "react";
import {connect} from "react-redux";
import {addNewSkill} from "../actions/actions";
import ChanceModal from "./ChanceModal";

class NewSkillModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            skillName: ""
        };

        this.createSkill = this.props.createSkill;
        this.onCreate = this.onCreate.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    onCreate() {
        this.createSkill(this.state.skillName);
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
                <ChanceModal>
                    <label>
                        Skill Name:
                        <input type="text" value={this.state.skillName} onChange={this.handleNameChange}/>
                    </label>
                    <button onClick={this.onCreate}>Create</button>
                </ChanceModal>
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
