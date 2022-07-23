import AsyncStorage from '@react-native-community/async-storage';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { onCreateBooking, onGetBooking } from '../actions';
import { sortList } from '../common/utils';
import { setBookingData, setLoading, setLoadingCreate, updateBooking } from '../reducers/bookingReducer';
import API from '../services/api';
import axios from '../services/api/axios';

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
    }
  } catch (error) {
    yield put(setLoading(false));
  }
};

export const onCreateBookingSaga = function* ({ payload: { input, callbackSuccess, callbackFailure } }) {
  try {
    yield put(setLoadingCreate(true));
    const { data } = yield call(axios.post, API.createBooking, input);
    if (data) {
      yield put(updateBooking({ input }));
      if (callbackSuccess) {
        callbackSuccess();
      }
    }
  } catch (error) {
    yield put(setLoadingCreate(false));
    if (callbackFailure) {
      callbackFailure(error.response.data);
    }
  }
};

async function saveLocalData(data) {
  return await AsyncStorage.setItem('list', JSON.stringify(data));
}

export const bookingSaga = function* () {
  yield all([
    takeLatest(onGetBooking, onGetBookingSaga),
    takeLatest(onCreateBooking, onCreateBookingSaga),
  ]);
};
