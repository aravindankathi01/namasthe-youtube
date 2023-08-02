import { configureStore } from "@reduxjs/toolkit";
import ToggleSlice from "./ToggleSlice";

const AppStore = configureStore({
  reducer: {
    toggle: ToggleSlice,
  },
});

export default AppStore;
