import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";


export const admin_login = createAsyncThunk(
    'auth/admin_login',
    async(info, {rejectWithValue, fulfillWithValue}) => {
         console.log(info)
        try {
            const {data} = await api.post('/admin-login', info, {
                withCredentials : true
            })
            // console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            // console.log(error.response.data)
            return rejectWithValue(error.response.data)
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
    messageClear: (state, _) => {
      state.errorMessage = ""
    }
  },
  extraReducers: (builder) => {
    // À compléter plus tard
    builder
    .addCase(admin_login.pending, (state, {payload}) => {
      state.loader = true;
    })
    .addCase(admin_login.rejected, (state, { payload }) => {
      console.log("Erreur backend :", payload);
      state.loader = false;
      state.errorMessage = payload?.error || "Erreur inconnue";
    })
    .addCase(admin_login.fulfilled, (state, { payload }) => {
    state.loader = false;
    state.errorMessage = '';
    state.successMessage = payload.message || "Connexion réussie";
    state.userInfo = payload; // ou juste le token, selon ta réponse backend
  })

  }
});

export const {messageClear} = authReducer.actions
export default authReducer.reducer;
