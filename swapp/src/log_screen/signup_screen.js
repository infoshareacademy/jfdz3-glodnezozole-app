import React from 'react';
import './log_screen.css';
import unlocked from '../img/unlocked.svg'

class SignUpScreen extends React.Component{

        constructor(props) {
            super(props);
            this.state = {
                surname: '',
                name: '',
                id: '',
                email: '',
            }
        }

        signInSubmit = e => {
            e.preventdefault()
            console.log(this.state)
            // this.setState({
            //     surname: event.currentTarget.surname,
            //     name: event.currentTarget.name,
            //     email: event.currentTarget.email,
            // })
        }


        render(){

        const { surname } = this.state.surname
        const { name } = this.state.name
        const { email } = this.state.email

        return (
            <div className="wrapper">
                <form className="log">
                    <div className="icon"><img src={unlocked} alt="lock"></img></div>
                    <h1>Wpisz swoje dane dostępu</h1>
                    <input type="text" placeholder="Imię"></input>
                    <input type="text" placeholder="Nazwisko"></input>
                    <input type="text" placeholder="Mail"></input>
                    <input type="password" placeholder="Hasło"></input>
                    <input type="password" placeholder="Powtórz hasło"></input>
                    <input type="submit" onClick={this.signInSubmit} value="Utwórz konto"></input>
                </form>
           </div>
            )}
    }

export default SignUpScreen;
