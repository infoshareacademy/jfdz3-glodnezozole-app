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

    renderItem = (item) => {
        return (
            <p>{item.name}</p>
        )
    };


    render () {
        const {data} = this.state;
        //console.log('data', data);
        return(
            <div>
                TEST
                {this.state.data.map((item) => this.renderItem(item))}
                </div>
        );
    }
}
