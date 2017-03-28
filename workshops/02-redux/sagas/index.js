import { put, call, takeEvery, fork, select } from 'redux-saga/effects'
import todoActions from '../Actions/TodoActions'
import API  from '../api/API'

function* initItems() {
  const state = yield call(API.read);
  yield put(todoActions.initialItems(state));
}

export function* initialItems() {
  yield takeEvery('INITIAL', initItems)
}

export function* log() {
  yield takeEvery('UPDATE', function* log() {
    console.log('test')
  })
}

export function* storeItemsSaga() {
  yield takeEvery(['INCREMENT', 'DELETE', 'UPDATE', 'FILTERDATA'], function* storeItem() {
    console.log(yield select());
    localStorage.setItem('state', JSON.stringify(yield select()));
  });
}

export default function* root() {
  yield [
    fork(initialItems),
    fork(storeItemsSaga),
    fork(log),
  ]
}
