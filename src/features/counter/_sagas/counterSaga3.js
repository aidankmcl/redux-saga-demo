import { put, take, race, call } from 'redux-saga/effects'

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
    yield delay(2000);
    yield put(increment());
    yield put(incrementAsync.success());
  } catch (err) {
    yield put(incrementAsync.failed(err));
  }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  while (true) {
    yield take(incrementAsync.request.match);
    yield race({
      task: call(incrementAsyncSaga),
      cancel: take(incrementAsync.cancel.match)
    });
  }
}