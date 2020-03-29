/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Linking, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from '../styles';
import colors from '../../../utils/colors';

const DeveloperContact = ({currentAppData}) => {
  const {developer, privacyPolicy} = currentAppData;

  return (
    <View>
      {developer.website && (
        <TouchableOpacity
          style={[styles.row, styles.badge, {marginVertical: 7}]}
          onPress={() => Linking.openURL(developer.website)}>
          <Icon name="earth" />
          <Text style={{fontWeight: '900'}}> Website</Text>
        </TouchableOpacity>
      )}

      {developer.name && (
        <View style={{marginVertical: 7}}>
          <View style={[styles.row, styles.badge]}>
            <Icon name="user" />
            <Text style={{fontWeight: '900'}}> Name</Text>
          </View>
          <Text style={{color: colors.grey}}>{developer.name}</Text>
        </View>
      )}

      {developer.email && (
        <View style={{marginVertical: 7}}>
          <View style={[styles.row, styles.badge]}>
            <Icon name="mail" />
            <Text style={{fontWeight: '900'}}> Email</Text>
          </View>
          <TouchableOpacity
            onPress={() => Linking.openURL(`mailto://${developer.email}`)}>
            <Text style={{color: colors.grey}}>{developer.email}</Text>
          </TouchableOpacity>
        </View>
      )}

      {developer.address && (
        <View style={{marginVertical: 7}}>
          <View style={[styles.row, styles.badge]}>
            <Icon name="enviromento" />
            <Text style={{fontWeight: '900'}}> Address</Text>
          </View>
          <Text style={{color: colors.grey}}>{developer.address}</Text>
        </View>
      )}

      {privacyPolicy && (
        <TouchableOpacity onPress={() => Linking.openURL(privacyPolicy)}>
          <Text>Privacy Policy</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const mapStateToProps = state => ({
  currentAppData: state.appState.currentAppData,
});

export default connect(mapStateToProps)(DeveloperContact);
