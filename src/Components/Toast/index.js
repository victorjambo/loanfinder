import {connect} from 'react-redux';
import {ToastAndroid} from 'react-native';

const mapper = {
  SHORT: ToastAndroid.SHORT,
  LONG: ToastAndroid.LONG,
};

const Toast = ({showToast, message, duration = 'SHORT'}) => {
  if (showToast) {
    ToastAndroid.showWithGravity(
      message,
      mapper[duration],
      ToastAndroid.CENTER,
    );
    return null;
  }
  return null;
};

const mapStateToProps = state => ({
  showToast: state.appState.showToast,
});

export default connect(mapStateToProps)(Toast);
