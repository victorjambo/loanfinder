import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Share} from 'react-native';
import {bindActionCreators} from 'redux';
import Icon from 'react-native-vector-icons/AntDesign';
import {createStackNavigator} from '@react-navigation/stack';

import {
  BOTTOM_TAB,
  APPVIEW,
  ABOUT_APP_FULL_DESC,
  SEARCH_RESULTS,
  SETTINGS,
  FAQS,
  ARTICLE,
  ARTICLES,
} from './routes';
import colors from '../utils/colors';
import {saveApp} from '../redux/actions';

const Stack = createStackNavigator();

const appStoreUrl =
  'http://play.google.com/store/apps/details?id=com.mutaidev.loanfinder';

const PrivateScreens = ({isCurrentAppSaved, saveCurrentApp, isLoggedIn}) => {
  const saveIcon = {
    headerRight: () => {
      if (isLoggedIn) {
        return (
          <Icon
            onPress={saveCurrentApp}
            name={isCurrentAppSaved ? 'heart' : 'hearto'}
            size={24}
            color={colors.magenta}
            style={styles.icon}
          />
        );
      }
    },
  };

  const handleShare = () => {
    Share.share({
      message: `Hi, Try this amazing app \n ${appStoreUrl}`,
    });
  };

  return (
    <Stack.Navigator screenOptions={{headerTintColor: 'white'}}>
      <Stack.Screen
        name={BOTTOM_TAB.name}
        component={BOTTOM_TAB.component}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={APPVIEW.name}
        component={APPVIEW.component}
        options={{headerTransparent: true, title: '', ...saveIcon}}
      />
      <Stack.Screen
        name={ABOUT_APP_FULL_DESC.name}
        component={ABOUT_APP_FULL_DESC.component}
        options={{
          title: ABOUT_APP_FULL_DESC.name,
          headerTintColor: 'black',
          ...saveIcon,
        }}
      />
      <Stack.Screen
        name={SEARCH_RESULTS.name}
        component={SEARCH_RESULTS.component}
        options={({route}) => ({
          title: `Results for "${route.params.search}"`,
          headerTintColor: 'black',
        })}
      />
      <Stack.Screen
        name={SETTINGS.name}
        component={SETTINGS.component}
        options={{
          title: SETTINGS.name,
          headerTintColor: 'black',
        }}
      />
      <Stack.Screen
        name={FAQS.name}
        component={FAQS.component}
        options={{
          title: 'FAQs',
          headerStyle: {
            backgroundColor: colors.primary,
          },
        }}
      />
      <Stack.Screen
        name={ARTICLE.name}
        component={ARTICLE.component}
        options={({route}) => ({
          title: '',
          headerTransparent: true,
          headerRight: () => {
            return (
              <Icon
                name="sharealt"
                size={24}
                color={colors.white}
                style={styles.icon2}
                onPress={handleShare}
              />
            );
          },
        })}
      />
      <Stack.Screen
        name={ARTICLES.name}
        component={ARTICLES.component}
        options={({route}) => ({
          headerStyle: {
            backgroundColor: colors.primary,
          },
          title: route.params.category,
          headerRight: () => {
            return (
              <Icon
                name="search1"
                size={24}
                color={colors.white}
                style={styles.icon2}
              />
            );
          },
        })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
  icon2: {
    marginRight: 20,
  },
});

const mapStateToProps = state => ({
  isCurrentAppSaved: state.appState.isCurrentAppSaved,
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  saveCurrentApp: bindActionCreators(saveApp, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateScreens);
