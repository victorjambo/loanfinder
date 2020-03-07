import NetInfo from '@react-native-community/netinfo';
import auth from '@react-native-firebase/auth';

import {HIDE_BANNER, NETWORK, LOGIN_SUCCESS} from './consts';

const setConnection = status => ({
  type: NETWORK,
  payload: status,
});

export const checkConnection = () => {
  return dispatch => {
    NetInfo.addEventListener(state =>
      dispatch(setConnection(state.isConnected)),
    );
  };
};

export const hideBanner = () => ({
  type: HIDE_BANNER,
  payload: false,
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginRequest = () => {
  return dispatch => {
    dispatch(loginSuccess());
  };
};
