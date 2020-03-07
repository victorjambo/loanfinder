import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SET_USER_INFO,
  LOGOUT_SUCCESS,
  SKIP_AUTH,
} from '../consts';
import initialState from '../initialState';

const authReducer = (state = initialState.auth, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      };
    case SET_USER_INFO:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        logoutSuccess: true,
      };
    case SKIP_AUTH:
      return {
        ...state,
        skipAuth: true,
      };
    default:
      return state;
  }
};

export default authReducer;
