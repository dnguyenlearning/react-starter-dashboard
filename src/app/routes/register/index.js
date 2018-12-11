import React,{Component} from "react";
import RegisterForm from "components/forms/registerForm";
import "./index.scss";
class Register extends Component{

    buildComponent = (props, state)=>{
        return (
            <div id="login">
                <div className="bg"></div>
                <RegisterForm />
            </div>
        )
    };

    render(){
        return this.buildComponent(this.props, this.state)
    }
}

export default Register;