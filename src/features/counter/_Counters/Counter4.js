import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  incrementAsync,
  getMagicValue,
  selectCount,
  selectRequestStatus,
  selectMagicValue
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const requestStatus = useSelector(selectRequestStatus);
  const magicValue = useSelector(selectMagicValue);

  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.row}>
        4. Add Magic Value
      </div>
      <div className={styles.row}>
        <button
          style={{ display: requestStatus === 'Pending' ? 'inline-block' : 'none' }}
          disabled={requestStatus !== 'Pending'}
          className={styles.button}
          aria-label="Cancel increment"
          onClick={() => dispatch(incrementAsync.cancel())}
        >
          Cancel!
        </button>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(incrementAsync.request())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <span>Magic Value: {magicValue}</span>
        <button
          disabled={requestStatus === 'Pending'}
          className={styles.button}
          aria-label="Get Magic Value"
          onClick={() => dispatch(getMagicValue())}
        >
          Update
        </button>
      </div>
      <div className={styles.row}>
        <p>Request status: {requestStatus || 'No requests active'}</p>
      </div>
    </div>
  );
}
