import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  incrementAsync,
  selectCount
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.row}>
        1. Async Increment
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(incrementAsync())}
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
    </div>
  );
}
