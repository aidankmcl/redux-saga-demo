import { createSlice, createAction } from '@reduxjs/toolkit';

export const incrementAsync = createAction('INCREMENT_ASYNC');

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      // Immer handles immutable state under the hood
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.counter.value;

export default counterSlice.reducer;
