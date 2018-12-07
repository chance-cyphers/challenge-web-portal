import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import SkillList from "./components/SkillList/SkillList";
import {Container, Row, Col} from 'reactstrap';
import Modal from 'react-modal';
import NewSkillModal from "./components/NewSkillModal";

Modal.setAppElement('body')

let App = ({skills}) => {
    return (
        <div className="App">
            <div className="title-bar"/>
            <Container className="App-content horizontalScroll" fluid={true}>
                <Row className="">
                    <Col xs="3" className="left-pane">
                        <NewSkillModal/>
                    </Col>
                    <Col xs="9">
                        {skills.map((s, i) => {
                            return <SkillList className="inline" key={i}/>
                        })}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        skills: state.skills.skills
    }
};

App = connect(mapStateToProps)(App);
export default App;
