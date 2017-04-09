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
            saleCurrency: '- wybierz walutę',
            purchaseCurrency: '- wybierz walutę',
            saleAmount: ''
        };
        this.changeSaleCurrency = this.changeSaleCurrency.bind(this);
        this.changePurchaseCurrency = this.changePurchaseCurrency.bind(this);
        this.changeSaleAmount = this.changeSaleAmount.bind(this);
    }

    componentDidMount() {
        let dataLoader = new XMLHttpRequest();
        dataLoader.open('GET', 'http://api.nbp.pl/api/exchangerates/tables/a/?format=json');
        dataLoader.onload = () => {
            let data = dataLoader.responseText;
            let jsonData;
            try {
                jsonData = JSON.parse(data);
            } catch (error) {
                jsonData = [];
            }
            const pln = {code: 'PLN', currency: 'złoty', mid: 1};
            const init = {code: '- wybierz walutę', currency: '', mid: ''};

            jsonData[0].rates.push(pln);

            const sortCodes = (a, b) => {return (a < b) ? -1 : (a > b) ? 1 : 0};
            jsonData[0].rates.sort(function (a, b) {
                return sortCodes(a.code, b.code)
            });

            jsonData[0].rates.push(init);

            this.setState({data: jsonData});
        }
        dataLoader.send(null);
    }

    changeSaleCurrency(event) {
        this.setState({saleCurrency: event.target.value});
    }

    changePurchaseCurrency(event) {
        this.setState({purchaseCurrency: event.target.value});
    }

    changeSaleAmount(event) {
        this.setState({saleAmount: event.currentTarget.value});
    }

    render() {
        const {data, purchaseCurrency, saleCurrency, saleAmount} = this.state;

        const list = (data[0]
            ? data[0].rates.map((e, index) => <option value={e.code} key={index}>{e.code} - {e.currency}</option>)
            : '');

        const saleRate = data[0]
            ? (data[0].rates.find(e => e.code === saleCurrency)).mid
            : '';

        const purchaseRate = data[0]
            ? (data[0].rates.find(e => e.code === purchaseCurrency)).mid
            : '';

        const result = isNaN(saleRate / purchaseRate * saleAmount) === true || (saleRate / purchaseRate * saleAmount) === Infinity
            ? '- wybierz waluty i ilość -'
            : (saleRate / purchaseRate * saleAmount).toFixed(2);

        return (
            <div className="container-fluid gray" id="Converter">
                <div className="col-md-1"/>
                <div className="col-md-5">
                    <h3>Waluta, którą masz:</h3>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <div className="col-md-10">
                                <select name="currency1"
                                        className="styled-select"
                                        value={saleCurrency}
                                        onChange={this.changeSaleCurrency}>
                                    {list}
                                </select>
                            </div>
                        </div>
                        <h4>Ilość:</h4>
                        <div className="form-group">
                            <div className="col-md-10">
                                <input className="form-control"
                                       type="text"
                                       value={saleAmount}
                                       onChange={this.changeSaleAmount}
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-5">
                    <div className="col-md-offset-2">
                        <h3>Waluta, której potrzebujesz:</h3>
                        <form className="form-horizontal right">
                            <div className="form-group">
                                <div className="col-md-12">
                                    <select name="currency2"
                                            className="styled-select"
                                            value={purchaseCurrency}
                                            onChange={this.changePurchaseCurrency}>
                                        {list}
                                    </select>
                                </div>
                            </div>
                            <h4>Ilość:</h4>
                            <div className="form-group">
                                <div className="col-md-12">
                                    <input className="form-control"
                                           type="text"
                                           value={result}
                                    />
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