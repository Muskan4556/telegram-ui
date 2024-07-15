import { createSlice } from "@reduxjs/toolkit";

const backHomeSlice = createSlice({
  name: "backHome",
  initialState: {
    visibility: true,
  },
  reducers: {
    backHomeVisibility: (state,actions) => {
      state.visibility = actions.payload;
    },
  },
});

export const { backHomeVisibility } = backHomeSlice.actions;
export default backHomeSlice.reducer;
