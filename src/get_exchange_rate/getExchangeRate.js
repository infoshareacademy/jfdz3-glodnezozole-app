import React from 'react';

class GetExchangeRate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            purchaseCurrency: '- wybierz walutę'
        };
        this.changePurchaseCurrency = this.changePurchaseCurrency.bind(this);
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
            const init = {code: '- wybierz walutę', currency: '', mid: '- wybierz walutę -'};

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

    changePurchaseCurrency(event) {
        this.setState({purchaseCurrency: event.target.value});
    }

    render() {
        const {data, purchaseCurrency} = this.state;

        const list = (data[0]
            ? data[0].rates.map((e, index) => <option value={e.code} key={index}>{e.code} - {e.currency}</option>)
            : '');

        const purchaseRate = data[0]
            ? (data[0].rates.find(e => e.code === purchaseCurrency)).mid
            : '';

        return (
			<div className="container-fluid gray">
				<div className="col-md-1"/>
				<div className="col-md-10">
					<h3>Sprawdź kurs waluty:</h3>
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
						<h4>Kurs:</h4>
						<div className="form-group">
							<div className="col-md-12">
								<input className="form-control"
									   type="text"
									   value={purchaseRate}
								/>
							</div>
						</div>
					</form>
				</div>
				<div className="col-md-1"/>
			</div>

        )
    }
}
export default GetExchangeRate;
