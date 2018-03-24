'use strict';

import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { navReducer } from './navigation';

console.log("~~~~~~~~~", navReducer)

const rootReducer = combineReducers({
  // THIS IS WHERE YOU LIST THE REDUCERS FROM ALL YOUR OTHER REDUCERS WITHIN THIS FILE
  routing,
  nav: navReducer
});

export default rootReducer;
