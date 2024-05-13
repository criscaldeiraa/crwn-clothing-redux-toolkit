import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  // Inside the reducers is the actions we are going to use into the app -- it means we dont need a different file with the actions for the users
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload
    }
  }
})

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;