import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'

let App = ({msg}) => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    {msg}
                </p>
            </header>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        msg: state.message
    }
}

App = connect(mapStateToProps)(App);

export default App;
