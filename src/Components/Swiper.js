import React, {Component} from 'react';
import {Button} from 'react-native-elements';
import {Dimensions, Platform, ScrollView, StyleSheet, View} from 'react-native';

import {AUTH} from '../Navigation/routes';
import ads from '../utils/AdsV2/triggerAds';

const {width, height} = Dimensions.get('window');

class Swiper extends Component {
  static defaultProps = {
    horizontal: true,
    pagingEnabled: true,
    showsHorizontalScrollIndicator: false,
    showsVerticalScrollIndicator: false,
    bounces: false,
    scrollsToTop: false,
    removeClippedSubviews: true,
    automaticallyAdjustContentInsets: false,
    index: 0,
  };

  state = this.initState(this.props);

  initState(props) {
    const total = props.children ? props.children.length || 1 : 0,
      index = total > 1 ? Math.min(props.index, total - 1) : 0,
      offset = width * index;

    const state = {
      total,
      index,
      offset,
      width,
      height,
    };

    this.internals = {
      isScrolling: false,
      offset,
    };

    return state;
  }

  onScrollBegin = e => {
    this.internals.isScrolling = true;
  };

  onScrollEnd = e => {
    this.internals.isScrolling = false;

    this.updateIndex(
      e.nativeEvent.contentOffset
        ? e.nativeEvent.contentOffset.x
        : e.nativeEvent.position * this.state.width,
    );
  };

  onScrollEndDrag = e => {
    const {
        contentOffset: {x: newOffset},
      } = e.nativeEvent,
      {children} = this.props,
      {index} = this.state,
      {offset} = this.internals;

    if (
      offset === newOffset &&
      (index === 0 || index === children.length - 1)
    ) {
      this.internals.isScrolling = false;
    }
  };

  updateIndex = offset => {
    const state = this.state,
      diff = offset - this.internals.offset,
      step = state.width;
    let index = state.index;

    if (!diff) {
      return;
    }

    index = parseInt(index + Math.round(diff / step), 10);

    this.internals.offset = offset;
    this.setState({
      index,
    });
  };

  swipe = () => {
    if (this.internals.isScrolling || this.state.total < 2) {
      return;
    }

    const state = this.state,
      diff = this.state.index + 1,
      x = diff * state.width,
      y = 0;

    this.scrollView && this.scrollView.scrollTo({x, y, animated: true});

    this.internals.isScrolling = true;

    if (Platform.OS === 'android') {
      setImmediate(() => {
        this.onScrollEnd({
          nativeEvent: {
            position: diff,
          },
        });
      });
    }
  };

  renderScrollView = pages => {
    return (
      <ScrollView
        ref={component => {
          this.scrollView = component;
        }}
        {...this.props}
        contentContainerStyle={[styles.wrapper, this.props.style]}
        onScrollBeginDrag={this.onScrollBegin}
        onMomentumScrollEnd={this.onScrollEnd}
        onScrollEndDrag={this.onScrollEndDrag}>
        {pages.map((page, i) => (
          <View style={[styles.fullScreen, styles.slide]} key={i}>
            {page}
          </View>
        ))}
      </ScrollView>
    );
  };

  renderPagination = () => {
    if (this.state.total <= 1) {
      return null;
    }

    const ActiveDot = <View style={[styles.dot, styles.activeDot]} />,
      Dot = <View style={styles.dot} />;

    let dots = [];

    for (let key = 0; key < this.state.total; key++) {
      dots.push(
        key === this.state.index
          ? React.cloneElement(ActiveDot, {key})
          : React.cloneElement(Dot, {key}),
      );
    }

    return (
      <View pointerEvents="none" style={[styles.pagination, styles.fullScreen]}>
        {dots}
      </View>
    );
  };

  renderButton = () => {
    const firstScreen = this.state.index === this.state.total - 3;
    return (
      <View
        pointerEvents="box-none"
        style={[styles.buttonWrapper, styles.fullScreen]}>
        {firstScreen ? (
          <Button
            title="Continue"
            type="outline"
            titleStyle={styles.titleStyle}
            buttonStyle={styles.buttonStyle}
            containerStyle={styles.containerStyle}
            onPress={() => this.swipe()}
          />
        ) : (
          <Button
            title="Start Now"
            type="outline"
            titleStyle={styles.titleStyle}
            buttonStyle={styles.buttonStyle}
            containerStyle={styles.containerStyle}
            onPress={this.handleStartNow}
          />
        )}
      </View>
    );
  };

  handleStartNow = () => {
    ads.showInterstitial();
    this.props.navigation.navigate(AUTH.name);
  };

  render = ({children} = this.props) => {
    return (
      <View style={[styles.container, styles.fullScreen]}>
        {this.renderScrollView(children)}
        {this.renderPagination()}
        {this.renderButton()}
      </View>
    );
  };
}

const styles = StyleSheet.create({
  fullScreen: {
    width: width,
    height: '100%',
  },
  container: {
    backgroundColor: 'transparent',
    position: 'relative',
  },
  slide: {
    backgroundColor: 'transparent',
  },
  pagination: {
    position: 'absolute',
    bottom: 110,
    left: 0,
    right: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.25)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    backgroundColor: '#FFFFFF',
  },
  buttonWrapper: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    position: 'absolute',
    bottom: 0,
    left: 0,
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 40,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  titleStyle: {
    color: '#fff',
  },
  buttonStyle: {
    borderRadius: 100 / 2,
    borderColor: '#fff',
    borderWidth: 2,
    backgroundColor: 'transparent',
  },
  containerStyle: {
    width: width / 2,
  },
});

export default Swiper;
