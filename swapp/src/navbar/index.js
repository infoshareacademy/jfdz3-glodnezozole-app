import React from 'react';
import './index.css';
import Swapp from '../img/logo.svg';

var Scroll    = require('react-scroll');
var Link       = Scroll.Link;
var scroll     = Scroll.animateScroll;


var NavigationBar = React.createClass({

    render: function () {
        return (
            <div className="">
                <nav className="container-fluid navbar navbar-default navbar-fixed-top ">
                    <div className="container-fluid navMenu">
                        <div className="collapse navbar-collapse " id="bs-example-navbar-collapse-1">
                            <img className="logo navbar-left" src={Swapp} onClick={() => scroll.scrollToTop()} alt="SWAPP"/>
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link activeClass="active" onClick={() => scroll.scrollToTop()} className="linkMod" to="Teaser" spy={true} smooth={true} duration={500} >Start</Link></li>
                                <li><Link activeClass="active" onClick={() => scroll.scrollTo(850)} className="linkMod" to="FunctionList" spy={true} smooth={true} duration={500}>Lista Funkcji</Link></li>
                                <li><Link activeClass="active" onClick={() => scroll.scrollToBottom()} className="linkMod" to="AboutUs" spy={true} smooth={true} duration={500} >O Nas!</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>


            </div>
        );
    }
});



export default NavigationBar;