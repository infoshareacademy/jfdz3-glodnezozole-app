import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import FunctionList from './function_list';
import AboutUs from './about_us/about_us';
import Teaser from './teaser/teaser';
import Converter from './currency_converter';


class App extends Component {
    render() {
        return (
            <div>
                <Teaser/>
                <FunctionList/>
                <AboutUs/>
                <Converter/>
            </div>
        );
    }
}

export default App;