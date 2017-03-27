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
            email: this.state.email,
            password: this.state.password,
            id: this.state.id
        },).then(response => console.log(response))
    }

    emailChanged = ({currentTarget: t}) => this.setState({email: t.value})
    passwordChanged = ({currentTarget: t}) => this.setState({password: t.value})


        render(){
        return (
            <div className="wrapper">
                <form onSubmit={this.sendData}>
                    <div className="icon"><img src={unlocked} alt="lock"></img></div>
                    <h1>Wpisz swoje dane dostępu</h1>
                    <input type="text" placeholder="Imię"></input>
                    <input type="text" placeholder="Nazwisko"></input>
                    <input type="text" placeholder="Mail" onChange={this.emailChanged}></input>
                    <input type="password" placeholder="Hasło" onChange={this.passwordChanged}></input>
                    <input type="password" placeholder="Powtórz hasło"></input>
                    <input type="submit" value="Utwórz konto"></input>
                </form>
           </div>
            )}
    }

export default SignUpScreen;