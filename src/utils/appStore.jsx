import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import sidebarReducer from "./sideVisibility";

const appStore = configureStore({
  reducer: {
    theme: themeReducer,
    sidebarVisibility: sidebarReducer,
  },
});

export default appStore;
