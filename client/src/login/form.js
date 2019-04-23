import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import './form.css';


export default class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.submitLoginForm = this.submitLoginForm.bind(this);
    }

    handleChangeUsername(e) {
        this.setState({ username: e.target.value.toLowerCase() });
    }

    handleChangePassword(e) {
        this.setState({ password: e.target.value });
    }

    submitLoginForm(e) {
        e.preventDefault();
        // console.log("submitloginform",this.state);
        this.props.submitLoginForm(this.state);
    }


    render() {
        return (
            <div className="main-div">
                <form method="post" onSubmit={this.submitLoginForm} >
                    <TextField className="email-field" id="loginEmail" type="text" name="email" label="Email" onChange={this.handleChangeUsername} />
                    <br />
                    <TextField className="password-field" id="loginPassword" type="password" name="password" label="Password" onChange={this.handleChangePassword} />
                    <br />
                    <Button className="button" id="signinBtn" raised color="primary" type="submit">Sign In</Button>
                    <br />
                    <p>Not Registered: <Link to={'/signUp'}>Sign Up</Link> </p>
                    <p>Go to Add Delete Edit Page: <Link to={'/add-edit-delete'}>AddEditDelete</Link> </p>
                </form>
            </div>
        )
    }
};