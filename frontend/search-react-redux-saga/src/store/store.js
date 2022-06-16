import { configureStore } from '@reduxjs/toolkit';
import formSlice from './slices/form/formSlice';
import searchResultSlice from './slices/search/searchResultSlice';
import createSagaMiddleware from 'redux-saga';
import { sagas } from './saga/sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    formSlice: formSlice,
    searchResultSlice: searchResultSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);