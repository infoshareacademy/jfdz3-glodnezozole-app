import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import FunctionList from './function_list';
import AboutUs from './about_us/about_us';
import LogScreen from './log_screen/log_screen';
import SignUpScreen from './log_screen/signup_screen';
import UsersTab from './usersTab/usersTab.js';
import { Modal } from 'react-bootstrap';

class App extends Component {

     constructor() {
        super();

        this.state = {
            showModal: false
        };
    }



    componentDidMount() {

        const pressed = [];
        const secretCode = 'pig';
        window.addEventListener('keyup', (e) => {
            pressed.push(e.key);
            pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
            if (pressed.join('').includes(secretCode)) {
                this.setState({
                    showModal: true
                });
            }
        });
    }

    close = () => { this.setState({showModal: false});};

    renderModal() {
        return (
            <div>
                <Modal className="modal-container" show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton >
                        <Modal.Title>Lista zarejestrowanych użytkowników</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <UsersTab/>
                    </Modal.Body>
                </Modal>
            </div>

        );
    }

    render() {
        return (
            <div>
                <FunctionList/>
                <AboutUs/>
                <LogScreen/>
                <SignUpScreen/>
                {this.renderModal()}
            </div>
        );
    }
}

export default App;
