import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  incrementAsync,
  selectCount,
  selectRequestStatus
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const requestStatus = useSelector(selectRequestStatus);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.row}>
        2. Async Request Status
      </div>
      <div className={styles.row}>
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
        <p>Request status: {requestStatus || 'No requests active'}</p>
      </div>
    </div>
  );
}
