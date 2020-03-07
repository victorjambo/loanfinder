import {LOGIN_REQUEST} from '../consts';
import initialState from '../initialState';

const authReducer = (state = initialState.auth, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
