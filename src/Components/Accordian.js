import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '../utils/colors';

class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      expanded: false,
    };

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          ref={this.accordian}
          style={styles.row}
          onPress={this.toggleExpand}>
          <View style={styles.leftContainer}>
            <Text style={styles.title}>{this.props.title}</Text>
          </View>
          <View style={styles.rightContainer}>
            <Icon
              name={
                this.state.expanded
                  ? 'keyboard-arrow-up'
                  : 'keyboard-arrow-down'
              }
              size={30}
              color={colors.primary}
            />
          </View>
        </TouchableOpacity>
        {this.state.expanded && (
          <View style={styles.child}>
            <Text style={styles.description}>{this.props.data}</Text>
          </View>
        )}
      </View>
    );
  }

  toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded: !this.state.expanded});
  };
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: colors.primary,
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: colors.backDrop,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  rightContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  child: {
    marginTop: -25,
    marginBottom: 10,
  },
  description: {
    margin: 15,
    marginTop: 20,
    textAlign: 'justify',
    lineHeight: 30,
    color: colors.textGrey,
    fontSize: 18,
  },
});

export default Accordian;
