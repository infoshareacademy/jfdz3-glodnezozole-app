import React from 'react';
import './index.css';
import Swapp from '../img/logo.svg';

var ReactDOM  = require('react-dom');
var Scroll    = require('react-scroll');

var Link       = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;


var NavigationBar = React.createClass({
    componentDidMount: function() {

        Events.scrollEvent.register('begin', function() {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function() {
            console.log("end", arguments);
        });

        scrollSpy.update();

    },
    scrollToTop: function() {
        scroll.scrollToTop();
    },
    componentWillUnmount: function() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    },
    render: function () {
        return (
            <div className="">
                <nav className="container-fluid navbar navbar-default navbar-fixed-top ">
                    <div className="container-fluid navMenu">
                        <div className="collapse navbar-collapse " id="bs-example-navbar-collapse-1">
                            <img className="logo navbar-left" src={Swapp} onClick={() => scroll.scrollToTop()} alt="SWAPP"/>
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link activeClass="active" onClick={() => scroll.scrollToTop()} className="linkMod" to="teaser" spy={true} smooth={true} duration={500} >Start</Link></li>
                                <li><Link activeClass="active" onClick={() => scroll.scrollTo(850)} className="linkMod" to="test2" spy={true} smooth={true} duration={500}>Lista Funkcji</Link></li>
                                <li><Link activeClass="active" onClick={() => scroll.scrollToBottom()} className="linkMod" to="test3" spy={true} smooth={true} duration={500} >O Nas!</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>


            </div>
        );
    }
});



export default NavigationBar;