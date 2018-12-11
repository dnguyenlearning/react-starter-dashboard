import React,{Component} from "react";
import Map from "components/map/react-google-maps";
import CustomTable from "components/tables/dashboard-table-custom";
import "./index.scss"
class Default extends Component{

    buildComponent = (props, state)=>{
        return (
            <div id="dashboard">
                <CustomTable/>
                <Map />
            </div>
        )
    };

    render(){
        return this.buildComponent(this.props, this.state)
    }
}

export default Default;