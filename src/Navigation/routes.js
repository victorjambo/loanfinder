import AppViewContainer from '../screens/Apps/AppView/AppViewContainer';
import BottomTab from './BottomTab';
import Auth from '../screens/Auth';
import Home from '../screens/Home';
import AboutAppFullDesc from '../screens/Apps/AppView/AboutAppFullDesc';
import Search from '../screens/Search/SearchPage';
import SearchResults from '../screens/Search/SearchResults';
import Profile from '../screens/Profile/Profile';
import Location from '../screens/PostAuth/Location';
import Terms from '../screens/PostAuth/Terms';
import ProfileAuth from '../screens/Profile/ProfileAuth';
import Settings from '../screens/Settings/Settings';

export const BOTTOM_TAB = {
  name: 'Bottom Tab',
  component: BottomTab,
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

export const LOCATION = {
  name: 'Set Location',
  component: Location,
};

export const TERMS = {
  name: 'Terms',
  component: Terms,
};

export const PROFILE_AUTH = {
  name: 'ProfileAuth',
  component: ProfileAuth,
};

export const SETTINGS = {
  name: 'Settings',
  component: Settings,
};
