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
                <form>
                    <div className="icon"><img src={unlocked} alt="lock"/></div>
                    <h1>Wpisz swoje dane dostępu</h1>
                    <input type="text" placeholder="Imię"/>
                    <input type="text" placeholder="Nazwisko"/>
                    <input type="text" placeholder="Mail"/>
                    <input type="password" placeholder="Hasło"/>
                    <input type="password" placeholder="Powtórz hasło"/>
                    <input type="submit" onClick={this.signInSubmit} value="Utwórz konto"/>
                </form>
           </div>
            )}
    }

export default SignUpScreen;