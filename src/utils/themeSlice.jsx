import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: "light",
    dark: false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    toggleDark: (state) => {
      state.dark = !state.dark;
    },
  },
});

export const { toggleTheme, toggleDark } = themeSlice.actions;
export default themeSlice.reducer;
