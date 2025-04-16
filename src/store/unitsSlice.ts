import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UnitsState {
  unitsById: { [id: string]: number };
}

const initialState: UnitsState = {
  unitsById: {},
};

const unitsSlice = createSlice({
  name: "units",
  initialState,
  reducers: {
    setUnits(state, action: PayloadAction<{ id: string; value: number }>) {
      const { id, value } = action.payload;
      state.unitsById[id] = value;
    },
    increment(state, action: PayloadAction<string>) {
      const id = action.payload;
      if (state.unitsById[id] === undefined) {
        state.unitsById[id] = 0;
      }
      state.unitsById[id] += 1;
    },
    decrement(state, action: PayloadAction<string>) {
      const id = action.payload;
      if (state.unitsById[id] === undefined) {
        state.unitsById[id] = 0;
      }
      if (state.unitsById[id] > 0) {
        state.unitsById[id] -= 1;
      }
    },
  },
});

export const { setUnits, increment, decrement } = unitsSlice.actions;

export default unitsSlice.reducer;
