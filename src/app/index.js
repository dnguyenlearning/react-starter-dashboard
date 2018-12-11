import React from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import Dashboard from "./routes/dashboard";
import Projects from "./routes/projects";
import Login from "../containers/userLogin";
import Register from "./routes/register"
import asyncComponent from "../utils/asyncComponent";
import "./index.scss";
import Navbar from "components/navbar";
import {PrivateRoute, AlreadyLogin} from "components/privateRoute";
import PropTypes from "prop-types";
function hiddenNavbar(location){
    const pages = ['/login', '/register']
    return pages.includes(location.pathname);
}

class App extends React.Component {
    render() {
        const {match, location, isLoggedIn} = this.props;
        const isHide = hiddenNavbar(location);
        return (
            <div className={`app-container`}>
                <div className="app-main-container">
                    <main className="app-main-content-wrapper">
                        <div className="app-main-content">
                            {!isHide && <Navbar />}
                            <Switch>
                                <Redirect exact from={`${match.url}`} to={`${match.url}login`}/>
                                <PrivateRoute isLoggedIn={isLoggedIn} path={`${match.url}dashboard`} component={Dashboard}/>
                                <PrivateRoute isLoggedIn={isLoggedIn} path={`${match.url}projects`} component={Projects} />
                                <AlreadyLogin isLoggedIn={isLoggedIn} path={`${match.url}login`} component={Login}/>
                                <Route path={`${match.url}register`} component={Register}/>
                                <Route component={asyncComponent(() => import('./routes/extraPages/routes/404'))}/>
                            </Switch>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

App.propsType = {
    match: PropTypes.object,
    location: PropTypes.object,
    isLoggedIn: PropTypes.bool
};

export default withRouter(App);