import React from 'react';
import './index.css';
import Swapp from '../img/logo.svg';
import {Navbar, Nav} from 'react-bootstrap';

var Scroll    = require('react-scroll');
var Link       = Scroll.Link;
var scroll     = Scroll.animateScroll;

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
                    <Navbar.Collapse className="">
                        <Nav pullRight>
                            <Link  activeClass="active" className="linkMod" to="trailer"  smooth={true} duration={500} >Start</Link>
                            <Link  activeClass="active" className="linkMod" to="functionlist" spy={true} smooth={true} duration={500}>Lista Funkcji</Link>
                            <Link  activeClass="active" className="linkMod" to="dream_team" spy={true} smooth={true} duration={500} >O Nas!</Link>
                            <Link  activeClass="active" className="linkMod" to="logInScreen" spy={true} smooth={true} duration={500} >Zaloguj</Link>
                            <Link  activeClass="active" className="linkMod" to="GetExchangeRate" spy={true} smooth={true} duration={500} >Kursy walut</Link>
                            <Link  activeClass="active" className="linkMod" to="Converter" spy={true} smooth={true} duration={500} >Kalkulator</Link>
                            <Link activeClass="active" className="linkMod" to="ExchangeRateHistory" spy={true} smooth={true} duration={500} >Historia</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

        );
    }
});



export default NavigationBar;