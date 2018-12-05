import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import SkillList from "./components/SkillList/SkillList";
import {Container, Row, Col} from 'reactstrap';


let App = ({msg, btnPressed}) => {
    return (
        <div className="App">
            <div className="title-bar"/>
            <Container className="App-content">
                <Row>
                    <Col>
                        <p>
                            {msg}
                        </p>
                        <button onClick={btnPressed}>Press me
                        </button>
                    </Col>
                    <Col>
                        <SkillList/>
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
