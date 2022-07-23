import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { onLogin } from '../actions';
import { REQUEST_STATUS } from '../common/constant';
import { setLoading, setLoginSuccess } from '../reducers/authenReducer';
import API from '../services/api';

export const onLoginSaga = function* () {
  try {
    const input = {
      username: 'hr1@gmail.com',
      password: '123456aA',
    };
    yield put(setLoading(true));
    const { data } = yield call(axios.post, API.login, input);
    if (data === REQUEST_STATUS.SUCCESS) {
      yield put(setLoginSuccess(input.username));
    } else {
      // console.log(data);
    }
    setLoading(false);
  } catch (e) {
    yield put(setLoading(false));
  }
};

export const authenticationSaga = function* () {
  yield all([takeLatest(onLogin, onLoginSaga)]);
};
