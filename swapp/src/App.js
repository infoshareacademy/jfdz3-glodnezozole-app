import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


import Teaser from './teaser/teaser';
class App extends Component {
  render() {
    return (
        <div>
            <Teaser/>
        </div>
    );
  }
}
export default App;