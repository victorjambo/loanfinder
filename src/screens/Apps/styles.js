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
    paddingHorizontal: 22,
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
    fontWeight: 'bold',
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
  appBodySectionTitle: {
    fontWeight: 'bold',
    letterSpacing: 0,
    marginTop: 10,
  },
  verticalSpace: {
    paddingVertical: 22,
  },
  horizonatalSpace: {
    paddingHorizontal: 20,
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
  appBodyContainer: {},
  aboutAppContainer: {
    flexDirection: 'row',
  },
  aboutAppTitle: {
    fontWeight: 'bold',
  },
  aboutAppIcon: {
    alignSelf: 'center',
    position: 'absolute',
    right: 0,
    fontWeight: 'bold',
  },
  divider: {
    backgroundColor: colors.lightgrey,
    height: 1.5,
    marginVertical: 20,
  },
  aboutAppFullDescSummary: {
    marginVertical: 4,
  },
  aboutAppFullDescTitle: {
    fontWeight: 'bold',
  },
});

export default styles;
