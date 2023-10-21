import { configureStore } from "@reduxjs/toolkit";
import ToggleSlice from "./ToggleSlice";
import searchSlice from "./searchSlice";

const AppStore = configureStore({
  reducer: {
    toggle: ToggleSlice,
    search: searchSlice,
  },
});

export default AppStore;
