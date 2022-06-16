import { takeLatest } from 'redux-saga/effects'
import { searchRequest } from './search/searchRequest';

export function* sagas() {
    yield takeLatest("form/setInput", searchRequest);
  }