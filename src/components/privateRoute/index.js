import React, {Component} from "react";
import {Route, Redirect} from "react-router-dom"
const PrivateRoute = ({component: Component, ...rest})=>{
    const {isLoggedIn, location} = rest;
    const previousPath = location && location.pathname || "/";
    console.log('previousPath', previousPath)
    return (
        <Route {...rest} render={(props)=>{
            return isLoggedIn
                ? <Component {...props}/>
                : <Redirect  to={{
                    pathname: "/login",
                    state: {referrer: previousPath}
                }} />
        }}/>
    )
};

const AlreadyLogin = ({component: Component, ...rest})=>{
    const {isLoggedIn} = rest;
    return (
        <Route {...rest} render={(props)=>{
            const {location} = props;
            return isLoggedIn && location.pathname === "/login" ? <Redirect to="/dashboard" /> : <Component {...props}/>
        }}/>
    )
};
export {PrivateRoute, AlreadyLogin};