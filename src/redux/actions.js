import NetInfo from '@react-native-community/netinfo';

import {HIDE_BANNER, NETWORK, LOGIN_REQUEST} from './consts';

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

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
  payload: true,
});

export const hideBanner = () => ({
  type: HIDE_BANNER,
  payload: false,
});
