import { createSlice, createAction } from '@reduxjs/toolkit';

export const incrementAsync = {
  request: createAction('INCREMENT_ASYNC_REQUEST'),
  success: createAction('INCREMENT_ASYNC_SUCCESS'),
  failed: createAction('INCREMENT_ASYNC_FAILED'),
  cancel: createAction('INCREMENT_ASYNC_CANCEL')
};

export const getMagicValue = createAction('GET_MAGIC_VALUE_REQUEST');

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    requestStatus: null,
    magicValue: 0
  },
  reducers: {
    increment: state => {
      // Immer handles immutable state under the hood
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    setMagicValue: (state, action) => {
      state.magicValue = action.payload;
    }
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
    [incrementAsync.cancel]: (state, action) => {
      state.requestStatus = 'Canceled';
    },
  }
});

export const { increment, decrement, setMagicValue } = counterSlice.actions;

// The functions below are called a selectors and allow us to select a value from
// the state.
export const selectCount = state => state.counter.value;
export const selectRequestStatus = state => state.counter.requestStatus;
export const selectMagicValue = state => state.counter.magicValue;

export default counterSlice.reducer;
