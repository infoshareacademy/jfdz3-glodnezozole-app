/**
 * Created by Kazun on 2017-04-08.
 */
import React from "react"
import { Modal } from 'react-bootstrap';
import UsersTab from '../usersTab/usersTab';
import './modalTab.css';

export default class ModalTab extends React.Component {
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

//     hideModal(() => {
//     this.setState({showModal: false});
// } )

    render() {
        return (
            <div>
                <Modal className="modal-container" show={this.state.showModal} onHide={this.hideModal}>
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



}
