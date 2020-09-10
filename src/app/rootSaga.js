import { all } from 'redux-saga/effects'

import { 
  watchIncrementAsync,
  // watchUpdateMagicValue
} from '../features/counter/counterSaga'

export default function* rootSaga() {
  yield all([
    watchIncrementAsync(),
    // watchUpdateMagicValue()
  ])
}