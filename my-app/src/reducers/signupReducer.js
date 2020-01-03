import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from '../actions/signupActions';

// init state for signup
const initState = {
  isLoading: false,
  isAuth: false,
  signupData: {},
  errMsg: "",
}

// the sign up reducer
const signupReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case SIGNUP_SUCCESS:
      return {
        isLoading: false,
        isAuth: true,
        signupData: action.payload,
        errMsg: "",
      }
    case SIGNUP_FAILURE:
      return {
        isLoading: false,
        isAuth: false,
        signupData: {},
        errMsg: action.payload,
      }
    default:
      return state;
  }
}

export default signupReducer;