import { put, takeEvery } from 'redux-saga/effects'

import { increment, incrementAsync } from './counterSlice';

const delay = (ms) => new Promise(res => setTimeout(res, ms))

// Our worker Saga: will perform the async increment task
export function* incrementAsyncSaga() {
  yield delay(1000);
  yield put(increment());
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery(incrementAsync.match, incrementAsyncSaga);
}