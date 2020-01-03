import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions/loginActions';

// init state for login
const initialState = {
  isLoading: false,
  isAuth: false,
  loginData: {},
  errMsg: "",
}

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: false,
      }
    case LOGIN_SUCCESS:
      return {
        isLoading: false,
        isAuth: true,
        loginData: action.payload,
        errMsg: "",
      }
    case LOGIN_FAILURE:
      return {
        isLoading: false,
        isAuth: false,
        loginData: {},
        errMsg: action.payload,
      }
    default:
      return state;
  }
}

export default loginReducer;