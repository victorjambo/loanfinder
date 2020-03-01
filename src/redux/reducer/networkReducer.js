import {NETWORK} from '../consts';
import initialState from '../initialState';

const networkReducer = (state = initialState.connection, action) => {
  switch (action.type) {
    case NETWORK:
      return {
        ...state,
        isConnected: action.payload,
      };
    default:
      return state;
  }
};

export default networkReducer;
