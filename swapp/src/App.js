import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import FunctionList from './function_list';
import AboutUs from './about_us/about_us';
class App extends Component {
    render() {
        return (
            <div>
                <FunctionList/>
                <AboutUs/>
            </div>
        );
    }
}
export default App;