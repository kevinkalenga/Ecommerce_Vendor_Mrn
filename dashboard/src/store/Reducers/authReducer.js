import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";


export const admin_login = createAsyncThunk(
    'auth/admin_login',
    async(info) => {
        console.log(info)
        try {
            // const {data} = await api.post('/admin-login', info, {
            //     withCredentials : true
            // })
            // console.log(data)
        } catch (error) {
            
        }
    }
)


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
