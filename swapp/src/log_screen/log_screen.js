import React from 'react';
import './log_screen.css';
import unlocked from '../img/unlocked.svg'
import axios from 'axios'
import FacebookLogin from 'react-facebook-login';

class LogScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    responseFacebook = (response) => {
        console.log(response);
    };

    componentDidMount() {
        axios.get('http://infoshareacademy.getsandbox.com/glodnezozole/users').then(response => {
            this.setState({
                data: response.data,
            })
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className="wrapper">
                <form>
                    <div className="icon"><img src={unlocked} alt="lock"></img></div>
                    <h1>Wpisz swoje dane użytkownika</h1>
                    <input type="text" placeholder="Email"></input>
                    <input type="password" placeholder="Hasło"></input>
                    <input type="submit" value="Zaloguj się"></input>
                    <FacebookLogin
                        appId="1088597931155576"
                        autoLoad={false}
                        fields="name,email,picture"
                        scope="public_profile,user_friends,user_actions.books"
                        callback={this.responseFacebook}
                        cssClass="my-facebook-button-class"
                    />
                </form>
            </div>
        )
    }
}

export default LogScreen;