import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import FunctionList from './function_list';
import AboutUs from './about_us/about_us';
import LogScreen from './log_screen/log_screen';
import SignUpScreen from './log_screen/signup_screen';
import GetExchangeRate from './get_exchange_rate/getExchangeRate';
import ExchangeRateHistory from './exchange_rate_history/exchangeRateHistory'

class App extends Component {
  // <GetExchangeRate/>
  // <FunctionList/>
  // <AboutUs/>
  // <LogScreen/>
  // <SignUpScreen/>

    render() {
        return (
            <div>
                <ExchangeRateHistory/>


            </div>
        );
    }
}

export default App;
