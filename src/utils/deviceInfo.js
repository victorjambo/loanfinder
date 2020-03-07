import DeviceInfo, {
  getUniqueId,
  getManufacturer,
} from 'react-native-device-info';

const deviceInfo = {
  deviceUniqueId: getUniqueId(),
  name: DeviceInfo.getBrand(),
  model: DeviceInfo.getModel(),
  manufacturer: getManufacturer(),
};

export default deviceInfo;
