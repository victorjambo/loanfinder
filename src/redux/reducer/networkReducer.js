import initialState from '../initialState';
import {NETWORK} from '../consts';

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
