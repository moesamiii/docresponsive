import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isSpecializationOpen: false,
  },
  reducers: {
    toggleSpecialization(state) {
      state.isSpecializationOpen = !state.isSpecializationOpen;
    },
    setSpecializationOpen(state, action) {
      state.isSpecializationOpen = action.payload;
    },
  },
});

export const { toggleSpecialization, setSpecializationOpen } = uiSlice.actions;
export default uiSlice.reducer;
