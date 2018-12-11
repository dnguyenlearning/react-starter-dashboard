import React, { Component } from 'react';
import "./index.scss";
import TextField from "@material-ui/core/TextField"
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from "@material-ui/core/Button";

import {passWordMatch, formValid, fieldsNotEmpty} from "../../../utils/form.helper";
import {emailRegex} from "../../../utils/regex";
import {Link} from "react-router-dom";
export default class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            formErrors: {
                email: "",
                password: "",
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        if (formValid(this.state)) {
            let data = {
                email: this.state.email,
                password: this.state.password
            };

            this.props.login(data);
        } else {
            console.error('INVALID-FORM')
        }
    };


    handleChange = name => e => {
        e.preventDefault();
        const {value} = e.target;
        let formErrors = {...this.state.formErrors};

        switch (name) {
            case "email":
                formErrors.email = emailRegex.test(value)
                    ? ""
                    : "invalid email address";
                break;
            case "password":
                formErrors.password =
                    value.length < 8 ? "minimum 8 characaters required" : "";
                break;
            default:
                break;
        }

        this.setState({formErrors, [name]: value});
    };



    buildComponent = (props, state) => {
        const { email, password, formErrors } = state;
        return (
            <div id="loginForm">
                <div className="company-icon">
                    <div className="icon"></div>
                </div>
                <h2>Sign In</h2>
                <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <TextField
                        label="Email*"
                        className="inputEmail"
                        value={email}
                        onChange={this.handleChange('email')}
                        margin="normal"
                        placeholder="Email Address"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        error={!!formErrors.email.length}
                        helperText={(formErrors.email.length) ? formErrors.email : null}
                    />
                    <TextField
                        label="Password*"
                        className="inputEmail"
                        value={password}
                        onChange={this.handleChange('password')}
                        margin="normal"
                        placeholder="Password"
                        fullWidth
                        type="password"
                        InputLabelProps={{
                            shrink: true
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment style={{ width: "100%" }} position="start">
                                    forgotten password?
                            </InputAdornment>
                            )
                        }}
                        error={!!formErrors.password.length}
                        helperText={(formErrors.password.length) ? formErrors.password : null}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        disabled={!fieldsNotEmpty(state) || !formValid(state)}
                        style={{
                            padding: "10px 20px",
                            background: "black",
                            color: "white",
                            marginTop: 10
                        }}
                    >Sign In</Button>
                </form>
                <Link to={"/register"}><small>Create an account?</small></Link>
            </div>
        )
    }

    render() {
        return this.buildComponent(this.props, this.state);
    }
}