import {StyleSheet, Dimensions} from 'react-native';

import colors from '../../utils/colors';

const {width} = Dimensions.get('window');

// TODO remove fontSize, googleLine
// TODO redo back button
// TODO skip button should not change position

const styles = StyleSheet.create({
  skip: {
    flexDirection: 'row',
    paddingRight: 25,
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  skipText: {
    fontSize: 16,
    color: colors.black,
  },
  fixedPosition: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  img: {
    position: 'relative',
    height: '100%',
  },
  header: {
    padding: 34,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
  },
  subTitle: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: '400',
  },
  white: {
    color: colors.white,
  },
  imgBg: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  imgBgBack: {
    flexDirection: 'row',
    paddingBottom: 80,
    alignItems: 'center',
  },
  imgBgBackText: {
    color: colors.white,
    fontSize: 20,
  },
  line: {
    borderBottomColor: colors.white,
    borderBottomWidth: 4,
    marginBottom: 8,
    width: 90,
    borderRadius: 100 / 2,
  },
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  middle: {
    flex: 2,
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
  },
  bottom: {
    flex: 1,
    alignSelf: 'stretch',
    margin: 20,
  },
  scrollView: {
    backgroundColor: colors.white,
    height: '100%',
  },
  body: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
  },
  sectionContainer: {
    margin: 32,
    paddingHorizontal: 24,
  },
  switcherContainer: {
    paddingTop: 20,
    flexDirection: 'row',
  },
  switcher: {
    color: colors.primaryText,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  btn: {
    alignSelf: 'stretch',
    marginBottom: 10,
    backgroundColor: colors.primary,
    width: width / 2,
  },
  inputContainer: {
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 15,
  },
  input: {
    padding: 15,
  },
  googleContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  googleLinesContainter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  googleLine: {
    borderBottomColor: colors.grey,
    borderBottomWidth: 2,
    width: width / 3,
    borderRadius: 100 / 2,
  },
  googleButton: {
    padding: 0,
  },
});

export default styles;
