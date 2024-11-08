import { createSlice } from '@reduxjs/toolkit';

// Initial state with default empty values
const initialState = {
  user: null,  // Can be recruiter or general user
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Login action to store user data (including recruiter data if applicable)
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    // Logout action
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

// Export actions
export const { login, logout } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
