import React from 'react';
import './exchangeRateHistory.css'
import axios from 'axios'

class ExchangeRateHistory extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			currencies: [],
			startDate: '',
			endDate: '',
			currencyCode: ''

		}
		this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
		this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
		this.handleChangeCurrencyCode = this.handleChangeCurrencyCode.bind(this);
	}

	componentDidMount(){
		axios.get('http://api.nbp.pl/api/exchangerates/tables/a/?format=json')
		.then(response => {
			this.setState({
				currencies: response.data[0].rates
			})
		})
		const currDate = new Date();
		const today = currDate.toISOString().substring(0, 10);
		const lastMount = currDate.setDate(currDate.getDate()-30);
		const iso = lastMount.toISOString()
		console.log(today, lastMount, iso)
		this.setState({
			startDate: lastMount,
			endDate: today
		})
	}

	componentDidUpdate(prevProps, prevState) {
		// console.log(prevState, this.state)
		if (prevState.currencyCode != this.state.currencyCode) {
			console.log(prevState, this.state)
		}
		// const { startDate, endDate, currencyCode } = this.state;
		// axios.get(`http://api.nbp.pl/api/exchangerates/rates/tables/a/${currencyCode}/${startDate}/${endDate}/?format=json`)
		// .then(response => console.log(response))

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
		 this.setState({currencyCode: event.target.value});
	}

	render(){
		const { currencies } = this.state;
		return (
		   	<div className="currency-container">
							<p className="currency-value">wybierz walute</p>
              <select className="currency-selector" value={this.state.value} onChange={this.handleChangeCurrencyCode}>
        	      {currencies ? currencies.map( (event, index) =>
									<option
									value={event.code}
									key={index}
									>{event.code}
									</option> ) : '' }
              </select>
							<form>
							<input className="currency-selector" type="date" onChange={this.handleChangeStartDate}></input>
							<input className="currency-selector" type="date" onChange={this.handleChangeEndDate}></input>

							</form>
      	</div>

        )

	}

}
export default ExchangeRateHistory;
