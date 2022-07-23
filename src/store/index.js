import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { authenReducer } from '../reducers/authenReducer';
import { bookingReducer } from '../reducers/bookingReducer';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  authenState: authenReducer,
  bookingState: bookingReducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
