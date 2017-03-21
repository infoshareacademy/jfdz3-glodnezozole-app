import React from 'react';
import './getExchangeRate.css'

class GetExchangeRate extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			currencies: []
		}
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
				currencies: data
			})
		}
		dataLoader.send(null);

		
	}

	render(){
		console.log(this.state)
		const { currencies } = this.state
		return (
		   	<div className="col-md-3">
              <select name="currencies" className="styled-select">
        	      {currencies[0] ? currencies[0].rates.map( (e) => <option>{e.code}</option> ) : '' }
              </select>
           	</div>
                        
        )
			
	}

}
export default GetExchangeRate;