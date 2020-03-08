import {StyleSheet, Dimensions} from 'react-native';

import colors from '../../utils/colors';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: colors.white,
  },
  white: {
    color: 'white',
  },
  img: {
    height: height / 4,
  },
  ico: {
    width: 100,
    height: 100,
  },
  topContainer: {
    flex: 9,
  },
  detailsContainer: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -30,
    paddingTop: 42,
    paddingHorizontal: 42,
  },
  row: {
    flexDirection: 'row',
  },
  iconNameContainer: {
    paddingBottom: 22,
  },
  shadow: {
    shadowColor: colors.black,
    shadowOpacity: 0.9,
    borderRadius: 10,
    elevation: 10,
  },
  icoContainer: {
    marginRight: 20,
  },
  textContainer: {
    justifyContent: 'center',
  },
  name: {
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 18,
  },
  subTitle: {
    color: colors.grey,
  },
  badgeContainer: {
    justifyContent: 'space-between',
  },
  badge: {
    alignItems: 'center',
  },
  badgeLabel: {
    color: colors.grey,
    marginLeft: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 0,
  },
  verticalSpace: {
    paddingVertical: 22,
  },
  desc: {
    paddingTop: 5,
    color: colors.grey,
  },
  bottomContainer: {
    flex: 1,
  },
  btnContainer: {
    marginHorizontal: 42,
  },
  btn: {
    width: '100%',
  },
  btnLabel: {
    paddingHorizontal: 10,
  },
});

export default styles;
