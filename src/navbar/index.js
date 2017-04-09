import React from 'react';
import './index.css';
import Swapp from '../img/logo.svg';
import {Navbar, Nav} from 'react-bootstrap';

var Scroll    = require('react-scroll');
var Link       = Scroll.Link;
var scroll     = Scroll.animateScroll;

const toggleMenu = (e) => {
     e.target.parentNode.parentNode.previousSibling.lastChild.click();
}

var NavigationBar = React.createClass({
    render: function () {
        return (

            <Navbar collapseOnSelect className = "navbar-default navbar-fixed-top container-fluid">
                    <Navbar.Header>
                            <Link className="logo" to="trailer" smooth={true} duration={500}>
                                <img className="logo " src={Swapp} alt="SWAPP"/>
                            </Link>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse className="" >
                        <Nav pullRight >
                            {sessionStorage.getItem("applicationInfoshare") === "false" || sessionStorage.getItem("applicationInfoshare") === null && <Link onClick={toggleMenu} activeClass="active" className="linkMod" to="trailer" spy={true} smooth={true} duration={500} >Start</Link>}
                            {sessionStorage.getItem("applicationInfoshare") === "false" || sessionStorage.getItem("applicationInfoshare") === null && <Link onClick={toggleMenu} activeClass="active" className="linkMod" to="functionlist" spy={true} smooth={true} duration={500}>Lista Funkcji</Link>}
                            {sessionStorage.getItem("applicationInfoshare") === "false" || sessionStorage.getItem("applicationInfoshare") === null && <Link onClick={toggleMenu} activeClass="active" className="linkMod" to="dream_team" spy={true} smooth={true} duration={500} >O Nas!</Link>}
                            {sessionStorage.getItem("applicationInfoshare") === "false" || sessionStorage.getItem("applicationInfoshare") === null && <Link onClick={toggleMenu} activeClass="active" className="linkMod" to="logInScreen" spy={true} smooth={true} duration={500} >Zaloguj</Link>}
                            {sessionStorage.getItem("applicationInfoshare") === "true" && <Link onClick={this.props.logout} activeClass="active" className="linkMod" to="logInScreen" spy={true} smooth={true} duration={500} >Wyloguj</Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

        );
    }
});



export default NavigationBar;