import AppViewContainer from '../screens/Apps/AppView/AppViewContainer';
import Tabs from './Tabs';
import Auth from '../screens/Auth';
import Home from '../screens/Home';
import AboutAppFullDesc from '../screens/Apps/AppView/AboutAppFullDesc';
import Search from '../screens/Search/SearchPage';
import SearchResults from '../screens/Search/SearchResults';
import Profile from '../screens/Profile/Profile';

export const TABS = {
  name: 'Tabs',
  component: Tabs,
};

export const PROFILE = {
  name: 'Profile',
  component: Profile,
};

export const APPVIEW = {
  name: 'AppViewContainer',
  component: AppViewContainer,
};

export const AUTH = {
  name: 'Auth',
  component: Auth,
};

export const HOME = {
  name: 'Home',
  component: Home,
};

export const ABOUT_APP_FULL_DESC = {
  name: 'About this app',
  component: AboutAppFullDesc,
};

export const SEARCH = {
  name: 'Search',
  component: Search,
};

export const SEARCH_RESULTS = {
  name: 'Search Results',
  component: SearchResults,
};
