import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import SkillList from "./components/SkillList/SkillList";
import {Col, Container, Row} from 'reactstrap';
import Modal from 'react-modal';
import ModalConductor from "./components/ModalConductor";
import {openNewSkillModal} from "./actions/actions";

Modal.setAppElement('body')

let App = ({skills, openModal, currentModal}) => {
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

const mapStateToProps = state => {
    return {
        skills: state.skills.skills,
        currentModal: state.modal.currentModal
    }
};

const mapDispatchToProps = dispatch => {
    return {
        openModal: () => {
            dispatch(openNewSkillModal());
        }
    };
};

App = connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
