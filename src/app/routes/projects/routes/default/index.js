import React,{Component} from "react";
import "./index.scss"
class Default extends Component{

    buildComponent = (props, state)=>{
        return (
            <div id="projects">
                Project
            </div>
        )
    };

    render(){
        return this.buildComponent(this.props, this.state)
    }
}

export default Default;