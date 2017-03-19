import React from 'react';
import './log_screen.css';
import unlocked from '../img/unlocked.svg'

class LogScreen extends React.Component{

        render(){
        return (
            <div className="wrapper">
                <form>
                    <div className="icon"><img src={unlocked} alt="lock"></img></div>
                    <h1>Wpisz swoje dane dostępu</h1>
                    <input type="text" placeholder="Login"></input>
                    <input type="password" placeholder="Hasło"></input>
                    <input type="submit" value="Zaloguj się"></input>
                </form>
           </div>
            )}
    }

export default LogScreen;