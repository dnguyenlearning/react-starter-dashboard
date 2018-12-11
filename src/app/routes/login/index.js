import React, {Component} from "react";
import LoginForm from "components/forms/loginForm";
import "./index.scss";

class Login extends Component {

    buildComponent = (props, state) => {
        const { location, history } = props;
        return (
            <div id="login">
                <div className="bg"></div>
                <LoginForm history={history} login={this.props.actions.login}/>
            </div>
        )
    };

    render() {
        return this.buildComponent(this.props, this.state)
    }
}

export default Login;