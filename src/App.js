import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import FunctionList from './function_list';
import AboutUs from './about_us/about_us';
import LogScreen from './log_screen/log_screen';
import SignUpScreen from './log_screen/signup_screen';
import GetExchangeRate from './get_exchange_rate/getExchangeRate';
import ExchangeRateHistory from './exchange_rate_history/exchangeRateHistory'

import NavigationBar from './navbar';
import Teaser from './teaser/teaser';
import Converter from './currency_converter';


class App extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <Teaser/>
                <FunctionList/>
                <AboutUs/>
                <Converter/>
                <GetExchangeRate/>
                <ExchangeRateHistory/>
                <LogScreen/>
                <SignUpScreen/>


            </div>
        );
    }
}

export default App;
