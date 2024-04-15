import {
  configureStore,
  createAction,
  createReducer,
  PayloadAction,
} from "@reduxjs/toolkit";

export interface StateType {
  count: number;
}

const initialState: StateType = {
  count: 0,
};

export const increment = createAction("increment");
export const decrement = createAction("decrement");
export const incrementByValue = createAction<number>("incrementByValue");

const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.count++;
    })
    .addCase(decrement, (state) => {
      state.count--;
    })
    .addCase(incrementByValue, (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    });
});

const store = configureStore({
  reducer: {
    root: rootReducer,
  },
});

export default store;
