import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from 'utils/asyncComponent';
const Projects = ({match}) => {
    return (
        <div className="app-wrapper">
            <Switch>
                <Redirect exact from={`${match.url}/`} to={`${match.url}/default`}/>
                <Route path={`${match.url}/default`} component={asyncComponent(() => import('./routes/default'))}/>
                <Route component={asyncComponent(() => import('../extraPages/routes/404'))}/>
            </Switch>
        </div>
    )
};

export default Projects;