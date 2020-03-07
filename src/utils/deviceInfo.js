import DeviceInfo from 'react-native-device-info';

const deviceInfo = {
  id: DeviceInfo.getUniqueID(),
  name: DeviceInfo.getBrand(),
  model: DeviceInfo.getModel(),
};

export default deviceInfo;
