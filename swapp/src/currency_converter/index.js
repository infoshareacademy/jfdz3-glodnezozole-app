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
            saleCurrency: 'PLN',
            purchaseCurrency: 'EUR',
            saleRate: 1,
            purchaseRate: []
        };
        this.changeSaleCurrency = this.changeSaleCurrency.bind(this);
        this.changePurchaseCurrency = this.changePurchaseCurrency.bind(this);
        this.loadData('http://api.nbp.pl/api/exchangerates/tables/a/?format=json', 'data');
        // this.loadSaleRate('http://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json', 'saleRate');

    }

    loadData = (url, field) => {
        const dataLoader = new XMLHttpRequest();
        dataLoader.open('GET', url);
        dataLoader.onload = () => {
            let data = dataLoader.responseText;
            let jsonData;
            try {
                jsonData = JSON.parse(data);
            } catch (error) {
                jsonData = [];
            }
            const pln = {code: 'PLN', currency: 'złoty', mid: 1};
            jsonData[0].rates.push(pln);
            this.setState({[field]: jsonData});
        };
        dataLoader.send(null);
    }

    // loadSaleRate = (url, field) => {
    //     const dataLoader = new XMLHttpRequest();
    //     dataLoader.open('GET', url);
    //     dataLoader.onload = () => {
    //         let saleRate = dataLoader.responseText;
    //         let jsonData;
    //         try {
    //             jsonData = JSON.parse(saleRate);
    //         } catch (error) {
    //             jsonData = [];
    //         }
    //         this.setState({[field]: jsonData});
    //         console.log(jsonData.rates[0].mid);
    //     };
    //     dataLoader.send(null);
    // }

    // changeSaleRate(event) {
    //     this.setState({saleRate: event.target.value});
    // }

    changeSaleCurrency(event) {
        this.setState({saleCurrency: event.target.value});
    }

    changePurchaseCurrency(event) {
        this.setState({purchaseCurrency: event.target.value});
    }

    render() {
        const {data, purchaseCurrency, saleCurrency, purchaseRate, saleRate} = this.state;
        const list = (data[0]
            ? data[0].rates.map((e, index) => <option value={e.code} key={index}>{e.code} - {e.currency}</option>)
            : '');

        // data rates find ten kod

        // console.log(data[0] ? data[0].rates : '');

        return (
            <div className="container-fluid gray">
                <div className="col-md-1"/>
                <div className="currency_left col-md-5">
                    <h3>Waluta, którą masz:</h3>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <div className="col-md-10">
                                <select name="currency1" className="styled-select" value={saleCurrency}
                                        onChange={this.changeSaleCurrency}>
                                    {list}
                                </select>
                            </div>
                        </div>
                        <h4>Ilość:</h4>
                        <div className="form-group">
                            <div className="col-md-10">
                                <input className="form-control" type="text" defaultValue={saleRate}/>
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
                                    <select name="currency2" className="styled-select" value={purchaseCurrency}
                                            onChange={this.changePurchaseCurrency}>
                                        {list}
                                    </select>
                                </div>
                            </div>
                            <h4>Ilość:</h4>
                            <div className="form-group">
                                <div className="col-md-12">
                                    <input className="form-control" type="text" defaultValue={purchaseRate}/>
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