import { createSlice } from "@reduxjs/toolkit";

const sideVisibilitySlice = createSlice({
  name: "sidebar",
  initialState: {
    visibility: false,
  },
  reducers: {
    toggleSidebarVisibility: (state) => {
      state.visibility = !state.visibility;
    },
  },
});

export const { toggleSidebarVisibility } = sideVisibilitySlice.actions;
export default sideVisibilitySlice.reducer;
