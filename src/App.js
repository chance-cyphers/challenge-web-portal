import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import SkillList from "./components/SkillList/SkillList";
import {Container, Row, Col} from 'reactstrap';


let App = ({msg, btnPressed}) => {
    return (
        <div className="App">
            <div className="title-bar"/>
            <Container className="App-content horizontalScroll" fluid={true}>
                <Row className="">
                    <Col xs="3">
                        <p>
                            {msg}
                        </p>
                        <button onClick={btnPressed}>Press me
                        </button>
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
        msg: state.message
    }
};

const mapDispatchToProps = dispatch => {
    return {
        btnPressed: () => {
            dispatch({type: "PLACEHOLDER_ACTION"});
        }
    }
};

App = connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
