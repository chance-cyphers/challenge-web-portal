import React from 'react';
import './App.css';
import {connect} from 'react-redux'


let App = ({msg, btnPressed}) => {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    {msg}
                </p>
                <button onClick={() => {
                    btnPressed();
                }}>Press me</button>
            </header>
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
