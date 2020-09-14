import React, { Component } from 'react';
import './LogInForm.css'

class LogInForm extends Component {
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
                <h2>Einloggen</h2>
                <button className="close-button" onClick={this.state.closeHandler}>X</button>
                <form>
                    <div className="field">
                        <input type="email" name="email"></input>
                        <label htmlFor="email">E-Mail</label>
                    </div>
                    <div className="field">
                        <input type="password" name="password" onChange={this.checkValidPassword}></input>
                        <label htmlFor="password" >Passwort</label>
                    </div>
                    <div className="checkboxContainer">
                        <input type="checkbox" id="stay"></input>
                        <label htmlFor="stay">Eingeloggt bleiben</label>
                    </div>
                </form>
            </div>
        </div>
    }
}

export default LogInForm;