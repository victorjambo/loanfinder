import {
  AUTH_SUCCESS,
  SHOW_GENERIC_ERROR,
  HIDE_GENERIC_ERROR,
  SET_USER_INFO,
  LOGOUT_SUCCESS,
  SKIP_AUTH,
  SET_USER_DISPLAY_NAME,
} from '../consts';
import initialState from '../initialState';

const authReducer = (state = initialState.auth, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
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
        isLoggedIn: false,
        user: {},
      };
    case SKIP_AUTH:
      return {
        ...state,
        skipAuth: action.payload,
      };
    case SHOW_GENERIC_ERROR:
      return {
        ...state,
        genericError: action.payload,
      };
    case HIDE_GENERIC_ERROR:
      return {
        ...state,
        genericError: '',
      };
    case SET_USER_DISPLAY_NAME:
      return {
        ...state,
        user: {
          ...state.user,
          displayName: action.payload,
        },
      };
    default:
      return state;
  }
};

export default authReducer;
