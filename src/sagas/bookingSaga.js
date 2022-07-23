import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { onGetBooking } from '../actions';
import { sortList } from '../common/utils';
import { setBookingData, setLoading } from '../reducers/bookingReducer';
import API from '../services/api';

export const onGetBookingSaga = function* () {
  try {
    const input = {
      user: 'hr1@gmail.com',
    };
    yield put(setLoading(true));
    const { data } = yield call(axios.post, API.getBooking, input);
    if (data) {
      const listReverse = data.reverse();
      yield call(saveLocalData, listReverse);
      const listCustom = listReverse.slice(0, 5);
      // avoid to sort all list, we just sort on each every 5 items.
      const list = sortList(listCustom);
      yield put(setBookingData({ list }));
    } else {
      // console.log(data);
    }
  } catch (e) {
    yield put(setLoading(false));
    // console.log(e.message);
  }
};

async function saveLocalData(data) {
  return await AsyncStorage.setItem('list', JSON.stringify(data));
}

export const bookingSaga = function* () {
  yield all([takeLatest(onGetBooking, onGetBookingSaga)]);
};
