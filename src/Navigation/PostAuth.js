import React from 'react';
import {connect} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';

import {LOCATION, TERMS, LANGUAGE} from './routes';

const Stack = createStackNavigator();

const PostAuth = ({isTermsAccepted, isLanguageSet}) => (
  <Stack.Navigator>
    {!isTermsAccepted && (
      <Stack.Screen
        name={TERMS.name}
        component={TERMS.component}
        options={{headerShown: false}}
      />
    )}
    {!isLanguageSet && (
      <Stack.Screen
        name={LANGUAGE.name}
        component={LANGUAGE.component}
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
  isLanguageSet: state.appState.isLanguageSet,
});

export default connect(mapStateToProps)(PostAuth);
