import React from 'react';
import "./index.scss";
import {NavLink} from "react-router-dom";
import UserAvatar from "../utilComponents/userAvatar";
export default function Navbar(props) {
    return (
        <nav id="navbarTop" className=" w-100 navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">
                <img src="/src/assets/images/logo.png" alt=""/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse mr-auto align-items-end align-self-stretch" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink activeClassName='active' className="nav-link" to="/dashboard">Dashboard</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName='active' className="nav-link" to="/projects">Projects</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName='active' className="nav-link" to="/alerts">Alerts</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName='active' className="nav-link" to="/stores">Stores</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName='active' className="nav-link" to="/gallery">Gallery</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName='active' className="nav-link" to="/tender">Tender</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName='active' className="nav-link" to="/insights">Insights</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName='active' className="nav-link" to="/budgets">Budgets</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/crm">Crm</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName='active' className="nav-link" to="/reports">Reports</NavLink>
                    </li>
                </ul>
            </div>
            <div className="userProfile">
                <UserAvatar userInfo={{
                    imageUrl: "/src/assets/images/avatar.png",
                    name: "Duong Nguyen",
                    phone: "0975719010"
                }}/>
            </div>
        </nav>
    );
}