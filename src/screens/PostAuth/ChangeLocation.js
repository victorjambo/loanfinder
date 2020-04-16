import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Button} from 'react-native-elements';

import colors from '../../utils/colors';
import {setLocation} from '../../redux/actions';

const {width} = Dimensions.get('window');

const ChangeLocation = ({changeLocation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.features}>
          No Loan apps in your current location
        </Text>
        <Button
          buttonStyle={styles.btn}
          title="Change Location"
          onPress={() => changeLocation('')}
          icon={<Icon name="enviromento" size={24} color="white" />}
        />
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
});

const mapStateToProps = state => ({
  settings: state.settings,
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  changeLocation: bindActionCreators(setLocation, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChangeLocation);
