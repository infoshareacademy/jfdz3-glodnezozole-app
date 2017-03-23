/**
 * Created by paulatomaszewska on 19.03.17.
 */
import React from 'react';
import './index.css';

class Converter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            saleCurrency: 'EUR',
            purchaseCurrency: 'USD'
        };
        this.sale = this.sale.bind(this);
        this.purchase = this.purchase.bind(this);
    }

    componentDidMount() {
        const dataLoader = new XMLHttpRequest();
        dataLoader.open('GET', 'http://api.nbp.pl/api/exchangerates/tables/a/?format=json');
        dataLoader.onload = () => {
            let data = dataLoader.responseText;
            let jsonData;
            try {
                jsonData = JSON.parse(data);
            } catch (error) {
                jsonData = [];
                console.warn('error')
            }
            this.setState({data: jsonData});
        };
        dataLoader.send(null);
    }

    sale(event) {
        this.setState({saleCurrency: event.target.value});
    }

    purchase(event) {
        this.setState({purchaseCurrency: event.target.value});
    }

    render() {
        const { data, purchaseCurrency, saleCurrency } = this.state;
        const list = (data[0] ? data[0].rates.map( (e, index) => <option key={index}>{e.code}</option> ) : '');
        return (
            <div className="container-fluid gray">
                <div className="col-md-1"/>
                <div className="currency_left col-md-5">
                    <h3>Waluta, którą masz:</h3>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <div className="col-md-10">
                                <select name="currency1" className="styled-select" value={saleCurrency} onChange={this.sale}>
                                    {list}
                                </select>
                            </div>
                        </div>
                        <h4>Ilość:</h4>
                        <div className="form-group">
                            <div className="col-md-10">
                                <input className="form-control" type="text" value="1"/>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="currency_right col-md-5">
                    <div className="col-md-offset-2">
                        <h3>Waluta, której potrzebujesz:</h3>
                        <form className="form-horizontal right">
                            <div className="form-group">
                                <div className="col-md-12">
                                    <select name="currency2" className="styled-select" value={purchaseCurrency} onChange={this.purchase}>
                                        {list}
                                    </select>
                                </div>
                            </div>
                            <h4>Ilość:</h4>
                            <div className="form-group">
                                <div className="col-md-12">
                                    <input className="form-control" type="text" value="1"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-1"/>
            </div>
        )
    }
}

export default Converter;