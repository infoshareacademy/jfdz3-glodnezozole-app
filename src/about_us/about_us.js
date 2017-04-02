/**
 * Created by marcin on 16.03.2017.
 */
import React from 'react';
import './about_us.css';
import Marcin from '../img/marcin.jpg';
import Adrian from '../img/adrian.png';
import Paula from '../img/paula.png';
import Bartek from '../img/bartek.jpg';


function AboutUs(props) {
    return (
        <article className="team container-fluid" id="dream_team">
        <div className="row">
        <section className="team col-xs-12 col-sm-6">
        <img className="img-team" src={Marcin} alt="zdjęcie"/>
        <h2>Marcin Pasiewicz</h2>
    <h4>"Everything looks fine at my end."</h4>
    </section>
    <section className="team col-xs-12 col-sm-6">
        <img className="img-team" src={Adrian} alt="zdjęcie"/>
        <h2>Adrian Lippa</h2>
    <h4>"It works for me."</h4>
    </section>
    </div>
    <div className="row">
        <section className="team col-xs-12 col-sm-6">
        <img className="img-team" src={Paula} alt="zdjęcie"/>
        <h2>Paula Tomaszewska</h2>
    <h4>"I didn't create that part of the program."</h4>
    </section>
    <section className="team col-xs-12 col-sm-6">
        <img className="img-team" src={Bartek} alt="zdjęcie"/>
        <h2>Bartosz Śledziński</h2>
    <h4>"The only easy day was yesterday."</h4>
    </section>
    </div>
    </article>

    )

}

export default AboutUs;