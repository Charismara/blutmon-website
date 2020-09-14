import React, { Component } from 'react';
import './RegisterForm.css'

class RegisterForm extends Component {
    constructor(props) {
        super();
        this.state = {
            show: props.show,
            closeHandler: props.closeHandler,
            passwordStrength: 0,
            validation: [false, false, false, false]
        }

        this.checkValidPassword = this.checkValidPassword.bind(this);
    }

    checkValidPassword(e) {
        const value = e.target.value;
        this.setState({
            validation: [
                (value.length >= 8),
                (value.search(/[A-Z]/) >= 0),
                (value.search(/[a-z]/) >= 0),
                (value.search(/[0-9]/) >= 0)
            ]
        });

        this.setState({
            passwordStrength: this.state.validation.reduce((acc, cur) => acc + cur)
        });
    }

    handleSocialLogin = (user) => {
        console.log(user);
    }

    handleSocialLoginFailure = (err) => {
        console.log(err);
    }

    render() {
        let containerClasses = "container";

        if (this.state.show) {
            containerClasses = "container show";
        }


        return <div className={containerClasses}>
            <div className="form-container">
                <h2>Registrieren</h2>
                <button className="close-button" onClick={this.state.closeHandler}>X</button>
                <form>
                    <div className="field">
                        <input type="email" id="email"></input>
                        <label htmlFor="email">E-Mail</label>
                    </div>
                    <div className="field">
                        <input type="password" id="password" onChange={this.checkValidPassword}></input>
                        <label htmlFor="password" >Passwort</label>
                    </div>
                    <div className="strength">
                        <span className={this.state.passwordStrength >= 1 ? 'bar bar-1 bar-show' : 'bar bar-1'}></span>
                        <span className={this.state.passwordStrength >= 2 ? 'bar bar-2 bar-show' : 'bar bar-2'}></span>
                        <span className={this.state.passwordStrength >= 3 ? 'bar bar-3 bar-show' : 'bar bar-3'}></span>
                        <span className={this.state.passwordStrength === 4 ? 'bar bar-4 bar-show' : 'bar bar-4'}></span>
                    </div>
                    <ul>
                        <li>{this.state.validation[0] ? '✔️' : '❌'} muss mindestens 8 Zeichen lang sein</li>
                        <li>{this.state.validation[1] ? '✔️' : '❌'} muss mindestens 1 Großbuchstaben enthalten</li>
                        <li>{this.state.validation[2] ? '✔️' : '❌'} muss mindestens 1 Kleinbuchstaben enthalten</li>
                        <li>{this.state.validation[3] ? '✔️' : '❌'} muss mindestens 1 Zahl enthalten</li>
                    </ul>
                    <div className="checkboxContainer">
                        <input type="checkbox" id="saveData"></input>
                        <label htmlFor="saveData">Ich stimme zu, dass meine auf dieser Website angegebenen Daten gespeichert werden dürfen.</label>
                    </div>
                    <div className="checkboxContainer">
                        <input type="checkbox" id="dsgvo"></input>
                        <label htmlFor="dsgvo">Ich stimme den <a href="blutmond-website/dsgvo.html" target="_blank" className="link">Nutzungsbedingungen</a> zu.</label>
                    </div>
                    <div className="submitButtonContainer">
                        <button className="submitButton">
                            <svg width="180px" height="60px" viewBox="0 0 180 60" className="submitBorder">
                                <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                                <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                            </svg>
                            <span>Registrieren</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    }
}

export default RegisterForm;