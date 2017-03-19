import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import FunctionList from './function_list';
import AboutUs from './about_us/about_us';
import Teaser from './teaser/teaser';
import NavigationBar from './navbar';

class App extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <Teaser/>
                <FunctionList/>
                <AboutUs/>
            </div>
        );
    }
}

export default App;