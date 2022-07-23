import { all } from 'redux-saga/effects';

import { authenticationSaga } from './authenSaga';
import { bookingSaga } from './bookingSaga';

export default function* rootSaga() {
  yield all([
    authenticationSaga(),
    bookingSaga(),
  ]);
}
