import {FS} from '../consts';
import initialState from '../initialState';

const featureSwitchReducer = (state = initialState.featureSwitch, action) => {
  switch (action.type) {
    case FS:
      return {
        ...state,
        googleAuth: action.payload,
      };
    default:
      return state;
  }
};

export default featureSwitchReducer;
