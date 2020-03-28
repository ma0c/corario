import React from 'react';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router';

import configureStore, { history } from './store/configureStore';
import routes from './routes';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <>
                {routes}
            </>
        </ConnectedRouter>
    </Provider>
  )
};


export default App;
