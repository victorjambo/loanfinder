import DeviceInfo, {
  getUniqueId,
  getManufacturer,
} from 'react-native-device-info'; // TODO Not really used in logs

const deviceInfo = {
  deviceUniqueId: getUniqueId(),
  name: DeviceInfo.getBrand(),
  model: DeviceInfo.getModel(),
  manufacturer: getManufacturer(),
};

export default deviceInfo;
