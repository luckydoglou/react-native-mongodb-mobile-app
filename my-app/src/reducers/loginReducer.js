// import {Alert} from 'react-native';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions/loginActions';

// init state for login
const initState = {
  isLoading: false,
  isAuth: false,
  loginData: {},
  errMsg: "",
}

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case LOGIN_SUCCESS:
      return {
        isAuth: true,
        isLoading: false,
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