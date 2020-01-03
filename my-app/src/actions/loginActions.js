import axios from 'axios';

// action types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

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

// async impure action creator enabled by redux-thunk
export const login = loginData => {
  return dispatch => {
    dispatch(loginRequest());
    const loginUri = 'http://localhost:5000/user/login';
    axios.post(loginUri, loginData)
      .then(res => {
        console.log("Status: ", res.status);
        console.log(res.data);
        if (res.status === 200) {
          dispatch(loginSuccess(loginData));
        }
        else {
          dispatch(loginFailure("User Not Found!"));
        }
      })
      .catch(err => {
        console.log("Login Request Error: ", err.message);
      });
  }
}
