import React from 'react';
import './log_screen.css';
import unlocked from '../img/unlocked.svg'
import axios from 'axios'

class SignUpScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            email: '',
            password: '',
            id: ''
        };
    }

    componentDidMount(){
        axios.get('http://infoshareacademy.getsandbox.com/glodnezozole/users').then(response =>{
            this.setState({
                id: response.data.length
            })
        })
    }
    sendData = (e) => {
        e.preventDefault();
        axios.post('http://infoshareacademy.getsandbox.com/glodnezozole/users', {
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
            password: this.state.password,
            id: this.state.id
        },).then(response => console.log(response))
    };

    nameChanged = ({currentTarget: t}) => this.setState({name: t.value});
    surnameChanged = ({currentTarget: t}) => this.setState({surname: t.value});
    emailChanged = ({currentTarget: t}) => this.setState({email: t.value});
    passwordChanged = ({currentTarget: t}) => this.setState({password: t.value});


        render(){
        return (
            <div className="wrapper">
                <form onSubmit={this.sendData}>
                    <div className="icon"><img src={unlocked} alt="lock"/></div>
                    <h1>Wpisz swoje dane dostępu</h1>
                    <input type="text" placeholder="Imię" onChange={this.nameChanged} required="required"/>
                    <input type="text" placeholder="Nazwisko" onChange={this.surnameChanged} required="required"/>
                    <input type="text" placeholder="Mail" onChange={this.emailChanged} required="required"/>
                    <input type="password" placeholder="Hasło" onChange={this.passwordChanged} required="required"/>
                    <input type="password" placeholder="Powtórz hasło" required="required"/>
                    <input type="submit" value="Utwórz konto"/>

                    <button onClick={this.props.onClick}>Zaloguj się</button>
                </form>
           </div>
            )}
    }

export default SignUpScreen;