import {ToastAndroid} from 'react-native';

const mapper = {
  SHORT: ToastAndroid.SHORT,
  LONG: ToastAndroid.LONG,
};

const Toast = ({visible, message, duration = 'SHORT'}) => {
  if (visible) {
    ToastAndroid.showWithGravity(
      message,
      mapper[duration],
      ToastAndroid.CENTER,
    );
    return null;
  }
  return null;
};

export default Toast;
