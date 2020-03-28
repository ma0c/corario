import React from 'react';
import { Route, Switch } from 'react-router';

import Home from '../pages/Home.jsx';
import Songs from '../pages/Songs.jsx';
import NotFound from '../pages/404.jsx';


export const PATH_HOME = "/";
export const PATH_SONGS = "/canciones";

const routes = (
    <Switch>
        <Route exact path={PATH_HOME} component={Home}/>
        <Route exact path={PATH_SONGS} component={Songs}/>
        <Route component={NotFound}/>
    </Switch>
);

export default routes;
