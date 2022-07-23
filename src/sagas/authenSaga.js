import { all, call, put, takeLatest } from 'redux-saga/effects';

import { onLogin } from '../actions';
import { REQUEST_STATUS } from '../common/constant';
import { setLoading, setLoginSuccess } from '../reducers/authenReducer';
import API from '../services/api';
import axios from '../services/api/axios';

export const onLoginSaga = function* ({
  payload: { username, password, callbackSuccess, callbackFailure },
}) {
  try {
    // use for testing
    // const input = {
    //   username: 'hr1@gmail.com',
    //   password: '123456aA',
    // };
    const input = { username, password };
    yield put(setLoading(true));
    const { data } = yield call(axios.post, API.login, input);
    if (data === REQUEST_STATUS.SUCCESS) {
      yield put(setLoginSuccess(input.username));
      if (callbackSuccess) {
        callbackSuccess();
      }
    }
    setLoading(false);
  } catch (error) {
    yield put(setLoading(false));
    if (callbackFailure) {
      callbackFailure(error.response.data);
    }
  }
};

export const authenticationSaga = function* () {
  yield all([takeLatest(onLogin, onLoginSaga)]);
};
