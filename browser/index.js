'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory, IndexRouter } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);


