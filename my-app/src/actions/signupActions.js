import axios from 'axios';

// action types
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

// action creators
export const signupRequest = () => {
  return {
    type: SIGNUP_REQUEST,
  }
}
export const signupSuccess = signupData => {
  return {
    type: SIGNUP_SUCCESS,
    payload: signupData,
  }
}
export const signupFailure = errMsg => {
  return {
    type: SIGNUP_FAILURE,
    payload: errMsg,
  }
}

// async impure action creator enabled by redux-thunk
export const signup = signupData => {
  return async dispatch => {
    dispatch(signupRequest());
    const signupUri = 'http://localhost:5000/user/signup';
    await axios.post(signupUri, signupData)
      .then(res => {
        console.log("Status: ", res.status);
        console.log(res.data);
        if (res.status === 200) {
          dispatch(signupSuccess(signupData));
        } else {
          dispatch(signupFailure("Unable to Sign Up"));
        }
      })
      .catch(err => {
        console.log("Signup Request Error: ", err.message);
      });
  }
}
