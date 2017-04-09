import React from 'react';
import './log_screen.css';
import unlocked from '../img/unlocked.svg'
import FacebookLogin from 'react-facebook-login';
import axios from 'axios'


class LogScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            form: {
                email: '',
                password: ''
            }
        };
        this.onChange = this.onChange.bind(this);
        this.handleLogInClick = this.handleLogInClick.bind(this);

    }

    setSessionStorage() {
        window.sessionStorage.setItem("applicationInfoshare", "true");
        window.location.href = '/';
    }

    handleLogInClick(event) {
        event.preventDefault();

        axios.get("http://infoshareacademy.getsandbox.com/glodnezozole/users").then(response => {
            response.data.filter((item) => {
                if (item.email === this.state.form.email && item.password === this.state.form.password) {
                    this.setSessionStorage();
                }
            });
        });
    }

    onChange = (event) => {
        event.preventDefault();
        this.state.form[event.target.name] = event.target.value;
        this.setState({form: this.state.form});
    };

    render() {
        return (
            <div id="logInScreen" className="wrapper">
                <form className="log">
                    <div className="icon"><img src={unlocked} alt="lock"/></div>
                    <h1>Wpisz swoje dane użytkownika</h1>
                    <input type="email" placeholder="Email" name="email" onChange={this.onChange}
                           value={this.state.email}/>
                    <input type="password" placeholder="Hasło" name="password" onChange={this.onChange}
                           value={this.state.password}/>
                    <input type="button" value="Zaloguj się" onClick={this.handleLogInClick}/>
                    <FacebookLogin
                        appId="1088597931155576"
                        autoLoad={false}
                        fields="name,email,picture"
                        scope="public_profile,user_friends,user_actions.books"
                        callback={this.responseFacebook}
                        cssClass="my-facebook-button-class"
                        textButton="Zaloguj się przez Facebook"
                    />
                    {/*<input type="button" value="Zaloguj się przez Facebook" onClick={this.handleClick}/>*/}

                    <button className="switch" onClick={this.props.onClick}>Zarejestruj się</button>
                </form>
            </div>
        )
    }
}

export default LogScreen;