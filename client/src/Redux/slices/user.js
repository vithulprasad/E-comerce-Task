import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    userToken: false,
    role: false,
  },
  reducers: {
    userSet: (state, action) => {
      const newItem = action.payload;
      state.userToken = newItem.token;
      state.role = newItem.role;
    },
    userLogout: (state) => {
      state.userToken = null;
      state.role = null;
    },
  },
});

export const { userSet, userLogout } = user.actions;
export default user.reducer;
