import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  successMessage: '',
  errorMessage: '',
  loader: false,
  userInfo: ''
};

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // À compléter plus tard
  },
  extraReducers: (builder) => {
    // À compléter plus tard
  }
});

export default authReducer.reducer;
