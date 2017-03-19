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
        }
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
            }
            this.setState({data: jsonData});
            console.log(data);
        };
        dataLoader.send(null);
    }

    render() {
        return (
            <div className="container-fluid gray">
                <div className="col-md-1"/>
                <div className="currency_left col-md-5">
                    <h3>Waluta, którą masz:</h3>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <div className="col-md-10">
                                <select name="currencies" className="styled-select">
                                    <option value="EUR">EUR</option>
                                    <option value="PLN">PLN</option>
                                    <option value="USD">USD</option>
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
                                    <select name="currencies" className="styled-select">
                                        <option value="EUR">EUR</option>
                                        <option value="PLN">PLN</option>
                                        <option value="USD">USD</option>
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