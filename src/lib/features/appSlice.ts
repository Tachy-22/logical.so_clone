import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
export interface CounterState {
  index: string;
}

// Define the initial state using that type
const initialState: CounterState = {
  index: "0",
};

export const indexSlice = createSlice({
  name: "app",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateIndex: (state, action: PayloadAction<string>) => ({
      ...state,
      index: action.payload,
    }),
  },
});

export const { updateIndex } = indexSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const Index = (state: RootState) => state.app.index;

export default indexSlice.reducer;
