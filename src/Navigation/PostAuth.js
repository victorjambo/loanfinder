import React from 'react';
import {connect} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';

import {LOCATION, TERMS} from './routes';

const Stack = createStackNavigator();

const PostAuth = ({isTermsAccepted}) => (
  <Stack.Navigator>
    {!isTermsAccepted && (
      <Stack.Screen
        name={TERMS.name}
        component={TERMS.component}
        options={{headerShown: false}}
      />
    )}
    <Stack.Screen
      name={LOCATION.name}
      component={LOCATION.component}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const mapStateToProps = state => ({
  isTermsAccepted: state.appState.isTermsAccepted,
});

export default connect(mapStateToProps)(PostAuth);
