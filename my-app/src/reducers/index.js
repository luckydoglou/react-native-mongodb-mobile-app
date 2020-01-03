import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import signupReducer from './signupReducer';

export default combineReducers({

  // all reduers go here
  // don't forget to import them as well
  loginReducer: loginReducer,
  signupReducer: signupReducer,

});