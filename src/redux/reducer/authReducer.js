import {REHYDRATE} from 'redux-persist';

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
    case LOGIN_REQUEST: // TODO remove one of isLoggedIn
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
        isLoggedIn: false,
      };
    case SKIP_AUTH:
      return {
        ...state,
        skipAuth: action.payload,
      };
    case REHYDRATE:
      // TODO REMOVE DEBUG REDUX PERSITE console.log('>>>', Object.keys(action.payload), '<<<');
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default authReducer;
