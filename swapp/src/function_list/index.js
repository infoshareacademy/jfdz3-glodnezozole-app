/**
 * Created by paulatomaszewska on 05.03.17.
 */
import React from 'react';
import './index.css';

function FunctionList() {
    return (
        <article id="functionlist" className="functionlist">

            <h1 className="functionlist">Dzięki naszej aplikacji:</h1>
            <section className="functionlist">
                <h1>
                    <span>SPRAWDZAJ</span>
                </h1>
                <p>Ceny zakupu i sprzedaży walut, akcji, obligacji</p>
            </section>
            <section className="functionlist">
                <h1>
                    <span>WYŚWIETLAJ</span>
                </h1>
                <p>Ranking najbardziej zyskownych instrumentów w danym okresie</p>
            </section>

            <section className="functionlist">
                <h1>
                    <span>ANALIZUJ</span>
                </h1>
                <p>Dane z przeszłości: ruchy na giełdach i rynkach walutowych</p>
            </section>

            <section className="functionlist">
                <h1>
                    <span>PROGNOZUJ</span>
                </h1>
                <p>Zachowania instrumentów w przyszłości</p>
            </section>

            <section className="functionlist">
                <h1>
                    <span>POWIADOM</span>
                </h1>
                <p>O aktualnych notowaniach i podejmij decyzję</p>
            </section>
        </article>)
}

export default FunctionList;