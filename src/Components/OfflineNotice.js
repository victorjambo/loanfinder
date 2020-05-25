import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {checkNetwork} from '../redux/actions';

const {width} = Dimensions.get('window');

const OfflineNotice = ({isConnected, checkConnection}) => {
  useEffect(() => {
    checkConnection();
  }, [checkConnection, isConnected]);

  if (isConnected) {
    return null;
  }

  return (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>
        No Internet Connection. Some feauture might not be available
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#EC2E53',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width,
    opacity: 0.7,
  },
  offlineText: {
    color: '#fff',
  },
});

const mapStateToProps = state => ({
  isConnected: state.connection.isConnected,
});

const mapDispatchToProps = dispatch => ({
  checkConnection: bindActionCreators(checkNetwork, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(OfflineNotice);
