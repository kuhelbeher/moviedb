import { combineReducers } from 'redux';

import movies from './Movies/reducer';
import toggle from './Toggle/reducer';

const rootReducer = combineReducers({
  toggle,
  movies,
});

export default rootReducer;
