import React from 'react';
import './teaser.css';
import skarbonka from '../img/skarbonka.svg';
import wykres from '../img/wykres.svg';
import wzrost from '../img/wzrost.svg';

function Teaser(props) {
    return (
        <article className="container-fluid teaser" id="trailer">
            <section className="container teaser">
                <figure className="col-sm-2"><img src={skarbonka} className="img-responsive center-block" alt="skarbonka"/>
                </figure>
                <h2 className="teaser col-sm-10">
                    <span className="teaser">Nie wiesz, jak skutecznie zainwestować oszczędności?</span>
                </h2>
            </section>
            <section className="container teaser">
                <figure className="col-sm-2 col-sm-push-10"><img src={wykres} className="img-responsive center-block"  alt="wykres"/>
                </figure>
                <h2 className="teaser col-sm-10 col-sm-pull-2">
                    <span>Nie masz głowy do obszernych i zawiłych opracowań analityków rynkowych?</span>
                </h2>
            </section>
            <section className="container teaser">
                <figure className="col-sm-2"><img src={wzrost} className="img-responsive center-block"  alt="kwiaty"/></figure>
                <h2 className="teaser col-sm-10">
                    <span className="dollarpot">My zrobimy to za Ciebie! Skorzystaj z naszej aplikacji, która dostarcza wszelkie niezbędne informacje, abyś mógł właściwie zainwestować swoje pieniądze.</span>
                </h2>
            </section>
        </article>
)
}

export default Teaser;