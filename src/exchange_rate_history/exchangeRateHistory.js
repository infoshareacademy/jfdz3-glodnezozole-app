import React from 'react';
import axios from 'axios'
var Line = require("react-chartjs").Line;


class ExchangeRateHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currencies: [],
            startDate: '',
            endDate: '',
            currencyCode: '',
            rates: [],
            data: {
                labels: [],
                datasets: [{
                    label: '# of Votes',
                    data: [],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }

        }
        this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
        this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
        this.handleChangeCurrencyCode = this.handleChangeCurrencyCode.bind(this);
    }

    componentDidMount() {
        axios.get('http://api.nbp.pl/api/exchangerates/tables/a/?format=json')
            .then(response => {
                let jsonData = response.data[0].rates;
                const sortCodes = (a, b) => {
                    return (a < b) ? -1 : (a > b) ? 1 : 0
                };
                jsonData.sort(function (a, b) {
                    return sortCodes(a.code, b.code)
                });
                this.setState({
                    currencies: jsonData
                })
            })
        const currDate = new Date();
        const today = currDate.toISOString().substring(0, 10);
        const lastMount = new Date().setDate(currDate.getDate() - 30);
        const lastMouthDate = new Date(lastMount).toISOString().substring(0, 10);
        this.setState({
            startDate: lastMouthDate,
            endDate: today
        })
    }


    handleChangeStartDate(event) {
        // console.log('startDate'+event.target.value)
        this.setState({startDate: event.target.value});
    }

    handleChangeEndDate(event) {
        // console.log('endDate'+event.target.value)
        this.setState({endDate: event.target.value});
    }

    handleChangeCurrencyCode(event) {
        let val = event.target.value;
        const {startDate, endDate, currencyCode} = this.state;
        axios.get(`http://api.nbp.pl/api/exchangerates/rates/a/${val}/${startDate}/${endDate}/?format=json`)
            .then(response => {

                console.log(response.data.rates)
                this.setState({
                    currencyCode: val,
                    data: this.getChartData(response.data.rates)
                });

            })
    }

    getChartData(rates) {
        return {
            labels: rates.map((e) => e.effectiveDate),
            datasets: [{
                label: '# of Votes',
                data: rates.map((e) => e.mid),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        };
    }

    render() {
        const {currencies} = this.state;
        return (
            <div className="container-fluid gray">
                <div className="col-md-1"/>
                <div className="col-md-10">
                    <h3>Sprawdź historię kursu waluty:</h3>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <div className="col-md-12">
                                <select className="styled-select"
                                        value={this.state.value}
                                        onChange={this.handleChangeCurrencyCode}>
                                    {currencies ? currencies.map((event, index) =>
                                        <option
                                            value={event.code}
                                            key={index}
                                        >{event.code}
                                        </option>) : '' }
                                </select>
                                <h4>Wybierz zakres dat:</h4>
                                <div className="col-md-6">
                                    <input className="form-control"
                                           value={this.state.startDate}
                                           type="date"
                                           onChange={this.handleChangeStartDate}/>
                                </div>
                                <div className="col-md-6">
                                    <input className="form-control"
                                           value={this.state.endDate}
                                           type="date"
                                           onChange={this.handleChangeEndDate}/>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="col-md-3"/>
                    <Line data={this.state.data} options={this.state.options} width="600" height="250" redraw/>
                </div>
            </div>


        )

    }

}
export default ExchangeRateHistory;