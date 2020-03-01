import NetInfo from '@react-native-community/netinfo';

import {HIDE_BANNER, NETWORK} from '../utils/constants';

const setConnection = status => ({
  type: NETWORK,
  payload: status,
});

export const checkNetwork = () => {
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
