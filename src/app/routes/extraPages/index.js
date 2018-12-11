import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from 'utils/asyncComponent';


const Pages = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Route path={`${match.url}/error-404`} component={asyncComponent(() => import('./routes/404'))}/>
            <Route path={`${match.url}/error-500`} component={asyncComponent(() => import('./routes/500'))}/>
            <Route component={asyncComponent(() => import('/routes/404'))}/>
        </Switch>
    </div>
);

export default Pages;
