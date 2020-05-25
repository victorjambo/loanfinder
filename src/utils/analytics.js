import React, {useEffect} from 'react';
import analytics from '@react-native-firebase/analytics';

export const logEvent = async (event, attr) => {
  await analytics().logEvent(event, {
    id: Math.random().toString(36).substring(1),
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
