import { combineReducers } from 'redux';

import tempReducer from './tempReducer';
import loginReducer from './tempReducer';


export default combineReducers({

  // all reduers go here
  // don't forget to import them as well
  tempReducer,
  loginReducer,

});