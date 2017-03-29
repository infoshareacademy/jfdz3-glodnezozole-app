import React from 'react';
import './getExchangeRate.css'
import axios from 'axios'

class GetExchangeRate extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			currencies: [],
			value: 'wybierz walute',
		}
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount(){
		axios.get('http://api.nbp.pl/api/exchangerates/tables/a/?format=json')
		.then(response => {
			this.setState({
				currencies: response.data[0].rates
			})
		})
	}

	handleChange(event) {
	    this.setState({value: event.target.value});
	  }


	render(){
		const { currencies } = this.state
		return (
		   	<div className="currency-container">
              <select className="currency-selector" value={this.state.value} onChange={this.handleChange}>
        	      {currencies ? currencies.map( (event, index) => <option value={event.mid} key={index}>{event.code}</option> ) : '' }
              </select>
				<p className="currency-value">{this.state.value}</p>
      	</div>

        )

	}

}
export default GetExchangeRate;
