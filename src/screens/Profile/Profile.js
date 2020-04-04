import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {LOCATION} from '../../Navigation/routes';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Tab</Text>
      <Button
        title="Click me"
        onPress={() => navigation.navigate(LOCATION.name)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb',
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Profile;
