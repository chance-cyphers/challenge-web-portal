import React from 'react';
import './App.css';
import SkillList from "./components/SkillList/SkillList";
import {Col, Container, Row} from 'reactstrap';
import Modal from 'react-modal';
import ModalConductor from "./components/ModalConductor";
import {openNewSkillModal} from "./actions/actions";
import {Skill} from "./reducers/SkillsReducer";
import {connect} from "react-redux";
import {RootState} from "./reducers/RootReducer";
import {Dispatch} from "redux";

Modal.setAppElement('body')

type Props = {
    skills: ReadonlyArray<Skill>,
    openModal: () => void,
    currentModal: string
}

let App = ({skills, openModal, currentModal}: Props) => {
    return (
        <div className="App">
            <div className="title-bar"/>
            <ModalConductor currentModal={currentModal}/>

            <Container className="App-content horizontalScroll" fluid={true}>
                <Row className="">
                    <Col xs="3" className="left-pane">
                        <button onClick={openModal}>New Skill</button>
                    </Col>
                    <Col xs="9">
                        {skills.map((s, i) => {
                            return <SkillList
                                className="inline"
                                key={i}
                                skillName={s.name}/>
                        })}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

const mapStateToProps = (state: RootState) => {

    return {
        skills: state.skills.skills,
        currentModal: state.modal.currentModal
    }
};

const mapDispatchToProps = (dispatch: Dispatch)=> {
    return {
        openModal: () => {
            dispatch(openNewSkillModal());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
