import React from 'react';
import './getExchangeRate.css'

class GetExchangeRate extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			currencies: [],
			value: 0,
		}
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount(){
		let dataLoader = new XMLHttpRequest();

		dataLoader.open('GET', 'http://api.nbp.pl/api/exchangerates/tables/a/?format=json');
		dataLoader.onload = () => {
			let data;
			try {
				data = JSON.parse(dataLoader.responseText);
			} catch (error) {
				console.error('błąd', 'error');
			}
			this.setState({
				currencies: data[0].rates
			})
		}
		dataLoader.send(null);
	}

	handleChange(event) {
	    this.setState({value: event.target.value});
	  }


	render(){
		const { currencies } = this.state

		console.log(this.state);
		return (
		   	<div className="col-md-3">
              <select name="currencies" className="styled-select" value={this.state.value} onChange={this.handleChange}>
        	      {currencies ? currencies.map( (event, index) => <option value={event.mid} key={index}>{event.code}</option> ) : '' }
              </select>
							<span>{this.state.value}</span>
      	</div>

        )

	}

}
export default GetExchangeRate;
