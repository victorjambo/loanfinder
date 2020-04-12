import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Button, Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

import colors from '../../utils/colors';
import {skipAuth} from '../../redux/actions';
import GoogleButton from '../Auth/GoogleButton';
import {SETTINGS} from '../../Navigation/routes';

const featuresText = 'To discover all our features, please Sign up.';

const {width} = Dimensions.get('window');

const ProfileAuth = ({navigation, undoSkipAuth}) => {
  return (
    <View style={styles.container}>
      <Header
        rightComponent={
          <Icon
            name="setting"
            color={colors.white}
            size={30}
            onPress={() => navigation.navigate(SETTINGS.name)}
          />
        }
        containerStyle={styles.settingsIcon}
      />
      <View style={styles.body}>
        <Text style={styles.features}>{featuresText}</Text>
        <Button
          buttonStyle={styles.btn}
          title="   Sign up with email"
          onPress={() => undoSkipAuth(false)}
          icon={<Icon name="mail" size={24} color="white" />}
        />
        <GoogleButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  features: {
    padding: 30,
    fontSize: 20,
    textAlign: 'center',
  },
  btn: {
    alignSelf: 'stretch',
    marginBottom: 10,
    backgroundColor: colors.primary,
    width: width / 2,
  },
  settingsIcon: {
    paddingTop: 0,
    backgroundColor: colors.primary,
  },
});

const mapDispatchToProps = dispatch => ({
  undoSkipAuth: bindActionCreators(skipAuth, dispatch),
});

export default connect(
  null,
  mapDispatchToProps,
)(ProfileAuth);
