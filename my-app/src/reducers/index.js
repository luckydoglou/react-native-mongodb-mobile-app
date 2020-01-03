import { combineReducers } from 'redux';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';

export default combineReducers({

  // all reduers go here
  // don't forget to import them as well
  signupReducer: signupReducer,
  loginReducer: loginReducer,

});