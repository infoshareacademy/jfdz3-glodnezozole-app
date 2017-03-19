import React from 'react';
import './teaser.css';
//import obrazków

function Teaser(props) {
    return (
        <article className="container-fluid teaser" id="trailer">
            <section className="container teaser">
                <figure className="col-sm-2"><img src="img/skarbonka.svg" className="img-responsive center-block"/>
                </figure>
                <h2 className="teaser col-sm-10">
                    <span className="teaser">Nie wiesz, jak skutecznie zainwestować oszczędności?</span>
                </h2>
            </section>
            <section className="container teaser">
                <figure className="col-sm-2 col-sm-push-10"><img src="img/wykres.svg"
                                                                 className="img-responsive center-block"/>
                </figure>
                <h2 className="teaser col-sm-10 col-sm-pull-2">
                    <span>Nie masz głowy do obszernych i zawiłych opracowań analityków rynkowych?</span>
                </h2>
            </section>
            <section className="container teaser">
                <figure className="col-sm-2"><img src="img/wzrost.svg" className="img-responsive center-block"/></figure>
                <h2 className="teaser col-sm-10">
                    <span className="dollarpot">My zrobimy to za Ciebie! Skorzystaj z naszej aplikacji, która dostarcza wszelkie niezbędne informacje, abyś mógł właściwie zainwestować swoje pieniądze.</span>
                </h2>
            </section>
        </article>
)
}

export default Teaser;