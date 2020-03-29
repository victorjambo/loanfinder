import AppViewContainer from '../screens/Apps/AppView/AppViewContainer';
import Tabs from './BottomTabNavigator';
import Auth from '../screens/Auth';
import Landing from '../screens/Landing';
import AboutAppFullDesc from '../screens/Apps/AppView/AboutAppFullDesc';

export const HOME_TABS = {
  name: 'Home',
  component: Tabs,
};

export const PROFILE = {
  name: 'Profile',
  component: Auth,
};

export const APPVIEW = {
  name: 'AppViewContainer',
  component: AppViewContainer,
};

export const AUTH = {
  name: 'Auth',
  component: Auth,
};

export const LANDING = {
  name: 'Landing',
  component: Landing,
};

export const ABOUT_APP_FULL_DESC = {
  name: 'About this app',
  component: AboutAppFullDesc,
};
