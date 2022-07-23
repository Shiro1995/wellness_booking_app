import { Dimensions, StatusBar } from 'react-native';

export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

export const REQUEST_STATUS = {
  SUCCESS: 'Success',
  FAILURE: 'Failure',
};

const { height } = Dimensions.get('window');
export const deviceHeight = height + Number(StatusBar.currentHeight)
export const statusBarHeight = Number(StatusBar.currentHeight);
