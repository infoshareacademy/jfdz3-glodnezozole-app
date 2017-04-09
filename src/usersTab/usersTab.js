/**
 * Created by Kazun on 2017-04-05.
 */
import React from 'react';
import './usersTab.css';
import axios from "axios";

export default class UsersTab extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        axios.get("http://infoshareacademy.getsandbox.com/glodnezozole/users").then(response => {
            this.setState ({
                data: response.data
            });
        });

    }

    renderItem = (item, index) => {
        return (
            <div className="row" key={index}>
                <ul className="col-md-offset-1 col-xs-2 tabForUsers">
                    <li> Imie: </li><li> Nazwisko:  </li><li> Email:</li>
                </ul>
                <ul className="col-md-offset-1 col-xs-2 tabForUsers">
                    <li> {item.name} </li><li> { item.surname} </li><li> { item.email}</li>
                </ul>
            </div>
                )
    };


    render () {
        const {data} = this.state;
        console.log('data', data);
        return(
            <div>
                {this.state.data.map((item, index) => this.renderItem(item, index))}
                </div>
        );
    }
}
