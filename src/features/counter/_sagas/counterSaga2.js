import { put, takeEvery } from 'redux-saga/effects'

import { increment, incrementAsync } from './counterSlice';

const failRandomly = (successCallback, failureCallback) => () => {
  if (Math.random() > 0.75) {
    failureCallback();
  } else {
    successCallback();
  }
}

const delay = (ms) => {
  return new Promise((resolve, reject) => setTimeout(failRandomly(resolve, reject), ms));
}

// Our worker Saga: will perform the async increment task
export function* incrementAsyncSaga() {
  try {
    yield delay(1000);
    yield put(increment());
    yield put(incrementAsync.success());
  } catch (err) {
    yield put(incrementAsync.failed(err));
  }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery(incrementAsync.request.match, incrementAsyncSaga);
}