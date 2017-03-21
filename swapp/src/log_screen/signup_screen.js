import React from 'react';
import './log_screen.css';
import unlocked from '../img/unlocked.svg'

class SignUpScreen extends React.Component{

        render(){
        return (
            <div className="wrapper">
                <form>
                    <div className="icon"><img src={unlocked} alt="lock"></img></div>
                    <h1>Wpisz swoje dane dostępu</h1>
                    <input type="text" placeholder="Login"></input>
                    <input type="text" placeholder="Imię"></input>
                    <input type="text" placeholder="Nazwisko"></input>
                    <input type="text" placeholder="Mail"></input>
                    <input type="password" placeholder="Hasło"></input>
                    <input type="password" placeholder="Powtórz hasło"></input>
                    <input type="submit" value="Utwórz konto"></input>
                </form>
           </div>
            )}
    }

export default SignUpScreen;