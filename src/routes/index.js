import React from 'react';
import { Route, Switch } from 'react-router';

import Home from '../pages/Home.jsx';
import Songs from '../pages/Songs.jsx';
import Song from '../pages/Song.jsx';
import Score from '../pages/Score.jsx';
import NotFound from '../pages/404.jsx';


export const PATH_HOME = "/";
export const PATH_SONGS = "/canciones";
export const PATH_SONG = "/cancion/:nombre";
export const PATH_SCORE = "/partitura";

export const PATH_SONG_WITH_ARG = (arg) => `/cancion/${arg}`;

const routes = (
    <Switch>
        <Route exact path={PATH_HOME} component={Home}/>
        <Route exact path={PATH_SONGS} component={Songs}/>
        <Route exact path={PATH_SONG} component={Song}/>
        <Route exact path={PATH_SCORE} component={Score}/>
        <Route component={NotFound}/>
    </Switch>
);

export default routes;
