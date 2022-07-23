import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { authenReducer, initialState } from '../reducers/authenReducer';
import { initialState as bookingInitState } from '../reducers/bookingReducer';
import { bookingReducer, signOut } from '../reducers/bookingReducer';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const appReducer = combineReducers({
  authenState: authenReducer,
  bookingState: bookingReducer,
});

const rootReducer = (state, action) => {
  if (action.type === signOut.toString()) {
    // eslint-disable-next-line no-param-reassign
    state = {
      ...state,
      authenState: initialState,
      bookingState: bookingInitState,
    };
  }
  return appReducer(state, action);
};
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
