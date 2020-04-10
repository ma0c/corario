import React  from 'react';
import { render } from 'react-dom';

import App from './App.jsx';
import loadScores from './services/dataProvider/Scores'

loadScores(
    require.context('./assets/musicxml/', true, /\.musicxml$/)
);

render(<App />, document.getElementById('root'));
