// TODO Delete this file
import AsyncStorage from '@react-native-community/async-storage';

const dbName = 'loanfinder';

export const TABLES = {
  APPS: 'APPS',
  LOCATION: 'LOCATION',
  SAVED_APPS: 'SAVED_APPS',
};

class LocalStorage {
  getItem = async itemID => {
    const value = await AsyncStorage.getItem(`@${dbName}:${itemID}`);
    return JSON.parse(value);
  };

  setItem = async (itemID, item) => {
    await AsyncStorage.setItem(`@${dbName}:${itemID}`, JSON.stringify(item));
  };

  updateItem = async (itemID, item) => {
    await AsyncStorage.mergeItem(`@${dbName}:${itemID}`, JSON.stringify(item));
  };

  // pass the items show be in format for [k1, v1], [k2, v2]
  multiSetItem = async (...items) => {
    const data = [];
    items.forEach((item, index) => {
      data[index] = [`@${dbName}:${item[0]}`, JSON.stringify(item[1])];
    });
    return await AsyncStorage.multiSet(data);
  };

  // returns the items in format of [v1, v2]
  multiGetItem = async itemIDs => {
    itemIDs.forEach((itemID, index) => {
      itemIDs[index] = `@${dbName}:${itemID}`;
    });
    const values = await AsyncStorage.multiGet(itemIDs);
    values.forEach((item, index) => {
      values[index] = JSON.parse(item[1]);
    });
    return values;
  };

  clearAll = async () => await AsyncStorage.clear();
}

const localStorage = new LocalStorage();

export default localStorage;
