import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import sidebarReducer from "./sideVisibility";
import backHomeReducer from "./backHome";

const appStore = configureStore({
  reducer: {
    theme: themeReducer,
    sidebarVisibility: sidebarReducer,
    backHome: backHomeReducer,
  },
});

export default appStore;
