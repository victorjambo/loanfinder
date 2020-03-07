import React, {useEffect} from 'react';
import analytics from '@react-native-firebase/analytics';
import pushid from 'pushid';
import {deviceInfo} from './deviceInfo';

export const logEvent = async (event, attr) => {
  await analytics().logEvent(event, {
    id: pushid(),
    ...deviceInfo,
    ...attr,
  });
};

export const withAnalytics = Component => props => {
  const trackScreenView = async screen =>
    await analytics().setCurrentScreen(screen, screen);

  useEffect(() => {
    trackScreenView(props.navigation.state.routeName);
  });
  return <Component {...props} />;
};
