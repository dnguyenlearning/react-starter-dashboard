import React, {Component} from 'react';
import "./index.scss";
import TextField from "@material-ui/core/TextField"
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from "@material-ui/core/Button";
import {emailRegex} from "../../../utils/regex";
import {formValid, fieldsNotEmpty, passWordMatch} from "../../../utils/form.helper";
import {Link} from "react-router-dom";
export default class RegisterForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
            formErrors: {
                email: "",
                password: "",
                confirmPassword: ""
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const passwordMatch = passWordMatch(this.state.password, this.state.confirmPassword);
        if (formValid(this.state) && passwordMatch) {
            console.log(`
        --SUBMITTING--
        Email: ${this.state.email}
        Password: ${this.state.password}
        ConfirmPassword: ${this.state.confirmPassword}
       
      `);
        } else {
            let formErrors = {...this.state.formErrors};
            if(!passwordMatch){
                formErrors.confirmPassword = "Password Do Not Match";
            }
            this.setState({formErrors});
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
            case "confirmPassword":
                formErrors.confirmPassword =
                    value !== this.state.password ? "Password Do Not Match" : "";
                break;
            default:
                break;
        }

        this.setState({formErrors, [name]: value});
    };

    buildComponent = (props, state) => {
        const {email, password, confirmPassword, formErrors} = state;
        return (
            <div id="registerForm">
                <div className="company-icon">
                    <div className="logo"></div>
                </div>
                <h2>Sign In</h2>
                <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <TextField
                        label="Email*"
                        className="inputEmail"
                        value={email}
                        onChange={this.handleChange("email")}
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
                        type="password"
                        value={password}
                        onChange={this.handleChange("password")}
                        margin="normal"
                        placeholder="Password"
                        fullWidth
                        InputLabelProps={{
                            shrink: true
                        }}
                        helperText={(formErrors.password.length) ? formErrors.password : null}
                        error={!!formErrors.password.length}
                    />

                    <TextField
                        label="Confirm Password*"
                        className="inputEmail"
                        value={confirmPassword}
                        type="password"
                        onChange={this.handleChange("confirmPassword")}
                        margin="normal"
                        placeholder="Confirm Password"
                        fullWidth

                        InputLabelProps={{
                            shrink: true
                        }}
                        helperText={(formErrors.confirmPassword.length) ? formErrors.confirmPassword : null}
                        error={!!formErrors.confirmPassword.length}
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
                <Link to={'login'}><small>Already have an account, log in?</small></Link>
            </div>
        )
    }

    render() {
        return this.buildComponent(this.props, this.state);
    }
}