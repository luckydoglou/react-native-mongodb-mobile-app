import axios from 'axios';
//import store from '../../../Store';

// action types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';

// action creators
export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  }
}
export const loginSuccess = loginData => {
  return {
    type: LOGIN_SUCCESS,
    payload: loginData,
  }
}
export const loginFailure = errMsg => {
  return {
    type: LOGIN_FAILURE,
    payload: errMsg,
  }
}

// save the auth token to redux store
export const setAuthToken = authToken => {
  return {
    type: SET_AUTH_TOKEN,
    payload: authToken,
  }
}

// async impure action creator enabled by redux-thunk
export const login = loginData => {
  return dispatch => {
    dispatch(loginRequest());
    const loginUri = 'http://localhost:5000/auth/login';
    
    axios.post(loginUri, loginData)
      .then(res => {
        console.log("loginAction.js, Status: ", res.status);
        console.log(res.data);
        dispatch(loginSuccess(loginData));

        // save the auth token
        const authToken = res.headers['auth-token'];
        dispatch(setAuthToken(authToken));
      })
      .catch(err => {
        dispatch(loginFailure("User Not Found!"));
        console.log("loginAction.js, Request Error: ", err.message);
      });
  }
}
