import { configureStore } from "@reduxjs/toolkit";
import unitsReducer from "./unitsSlice.ts";

const testStore = configureStore({
  reducer: {
    units: unitsReducer,
  },
});

export default testStore;
