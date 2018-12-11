import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Dashboard from "./components/dashboard";
import FullView from './layout/fullview';

import * as _ from "lodash";

//TODO: route only handles container, not component

export default () => {
	return (
        <Router>
            <FullView>
                <Route exact path={"/"} component={Dashboard} />
            </FullView>
        </Router>
	);
};
