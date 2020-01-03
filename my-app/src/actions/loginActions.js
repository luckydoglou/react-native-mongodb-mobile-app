import axios from 'axios';

// action types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// action creators
export const loginRequest = loginData => {
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
  return async dispatch => {
    dispatch(loginRequest(loginData));
    const loginUri = 'http://localhost:5000/user/login';
    await axios.post(loginUri, loginData)
      .then(res => {
        if (res.status === 200) {
          console.log("Status: ", res.status);
          console.log(res.data);
          dispatch(loginSuccess());
        } else {
          dispatch(loginFailure("User Not Found!"));
        }
      })
      .catch(err => {
        console.log("Login Request Error: ", err.message);
      });
  }
}