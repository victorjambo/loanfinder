import AsyncStorage from '@react-native-community/async-storage';

export const DB_NAME = 'loanfinder';

export const TABLES = {
  USER: 'USER',
  API_DATA: 'API_DATA',
  ISLOGGEDIN: 'ISLOGGEDIN',
  SAVED_APPS: 'SAVED_APPS',
};

class LocalStorage {
  getItem = async itemID => {
    const value = await AsyncStorage.getItem(`@${DB_NAME}:${itemID}`);
    return JSON.parse(value);
  };

  getTables = async () => {
    return await AsyncStorage.getAllKeys();
  };

  setItem = async (itemID, item) => {
    await AsyncStorage.setItem(`@${DB_NAME}:${itemID}`, JSON.stringify(item));
  };

  updateItem = async (itemID, item) => {
    await AsyncStorage.mergeItem(`@${DB_NAME}:${itemID}`, JSON.stringify(item));
  };

  // pass the items show be in format for [k1, v1], [k2, v2]
  multiSetItem = async (...items) => {
    const data = [];
    items.forEach((item, index) => {
      data[index] = [`@${DB_NAME}:${item[0]}`, JSON.stringify(item[1])];
    });
    return await AsyncStorage.multiSet(data);
  };

  // returns the items in format of [v1, v2]
  multiGetItem = async itemIDs => {
    itemIDs.forEach((itemID, index) => {
      itemIDs[index] = `@${DB_NAME}:${itemID}`;
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
