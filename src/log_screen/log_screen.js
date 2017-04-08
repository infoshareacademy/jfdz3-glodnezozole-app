import React from 'react';
import './log_screen.css';
import unlocked from '../img/unlocked.svg'
import axios from 'axios'
import FacebookLogin from 'react-facebook-login';

class LogScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            email: '',
            password: '',
            data: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    responseFacebook = (response) => {
        console.log(response);
    };

    componentDidMount() {
        // axios.get('http://infoshareacademy.getsandbox.com/glodnezozole/users').then(response => {
        //     this.setState({
        //         data: response.data,
        //     })
        // })
    }

    setDataToStorage() {
        console.log('Dodaj do `sessionStorage`');
    }

    handleSubmit(event) {
        event.preventDefault();


       axios.get('http://infoshareacademy.getsandbox.com/glodnezozole/users').then(response => {
            // debugger;
            // todo
           // Dane users - response.data
           // Form input data - email i password (this.state.email i this.state.password)

           // Krok 1: email i password użytkownika porównać z email i password z formularza
           // Krok 2: dodanie do sesssionStorage
        });


       // BRUDNOPIS
        // const response = await axios.get('http://infoshareacademy.getsandbox.com/glodnezozole/users').then(response => {
        //     return response.data;
        // });
        //
        // response.filter((item) => {
        //     // porównanie login, haslo z API response
        //     if(item.email === this.state.email && item.password === this.state.password) {
        //         this.setDataToStorage();
        //     }
        // });

    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        console.log(this.state);
        if(!this.state.isLoggedIn) {  // dopracować aby nie wyrenderował niżej nie wymienionych
        return (
            <div className="wrapper">
                <form onSubmit={this.handleSubmit}>
                    <div className="icon"><img src={unlocked} alt="lock"/></div>
                    <h1>Wpisz swoje dane użytkownika</h1>

                    <input name="email" type="text" placeholder="Email"  value={this.state.email} onChange={this.handleInputChange} />

                    <input name="password" type="password" placeholder="Hasło" value={this.state.password} onChange={this.handleInputChange} />

                    <input type="submit" value="Zaloguj się"/>

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
}

export default LogScreen;