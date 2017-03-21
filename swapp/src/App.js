import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import FunctionList from './function_list';
import AboutUs from './about_us/about_us';
import LogScreen from './log_screen/log_screen';
import SignUpScreen from './log_screen/signup_screen';
import GetExchangeRate from './get_exchange_rate/getExchangeRate';

class App extends Component {
    render() {
        return (
            <div>
                <GetExchangeRate/>
                <FunctionList/>
                <AboutUs/>
                <LogScreen/>
                <SignUpScreen/>
            </div>
        );
    }
}

export default App;
