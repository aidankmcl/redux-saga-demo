import { createSlice, createAction } from '@reduxjs/toolkit';

export const incrementAsync = {
  request: createAction('INCREMENT_ASYNC_REQUEST'),
  success: createAction('INCREMENT_ASYNC_SUCCESS'),
  failed: createAction('INCREMENT_ASYNC_FAILED')
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    requestStatus: null,
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
  extraReducers: {
    [incrementAsync.request]: (state, action) => {
      state.requestStatus = 'Pending';
    },
    [incrementAsync.success]: (state, action) => {
      state.requestStatus = 'Success';
    },
    [incrementAsync.failed]: (state, action) => {
      state.requestStatus = 'Failed';
    },
  }
});

export const { increment, decrement } = counterSlice.actions;

// The functions below are called a selectors and allow us to select a value from
// the state.
export const selectCount = state => state.counter.value;
export const selectRequestStatus = state => state.counter.requestStatus;

export default counterSlice.reducer;
