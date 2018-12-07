import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import SkillList from "./components/SkillList/SkillList";
import {Container, Row, Col} from 'reactstrap';
import Modal from 'react-modal';
import NewSkillModal from "./components/NewSkillModal";

Modal.setAppElement('body')

let App = ({msg}) => {
    return (
        <div className="App">
            <div className="title-bar"/>
            <Container className="App-content horizontalScroll" fluid={true}>
                <Row className="">
                    <Col xs="3" className="left-pane">
                        <NewSkillModal/>
                    </Col>
                    <Col xs="9">
                        <SkillList className="inline"/>
                        <SkillList className="inline"/>
                        <SkillList className="inline"/>
                        <SkillList className="inline"/>
                        <SkillList className="inline"/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        msg: state.placeholder.message
    }
};

const mapDispatchToProps = dispatch => {
    return {
    }
};

App = connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
