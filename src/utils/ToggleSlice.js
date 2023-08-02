import { createSlice } from "@reduxjs/toolkit";

const ToggleSlice = createSlice({
  name: "toggle",
  initialState: {
    flag: false,
  },
  reducers: {
    toggleHamburger: (state) => {
      state.flag = !state.flag;
    },
  },
});

export const { toggleHamburger } = ToggleSlice.actions;
export default ToggleSlice.reducer;
