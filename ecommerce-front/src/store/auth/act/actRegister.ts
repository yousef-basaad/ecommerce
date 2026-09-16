import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { TUser, TAuthUser } from '@customTypes/user';
import { API_BASE_URL } from '@util/apiConfig';

type TRegisterInput = { name: string; email: string; password: string };

const actRegister = createAsyncThunk("auth/actRegister", async (input: TRegisterInput, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
        const existing = await axios.get<TUser[]>(`${API_BASE_URL}/users?email=${encodeURIComponent(input.email)}`);
        if (existing.data.length > 0) {
            return rejectWithValue("An account with this email already exists");
        }
        const response = await axios.post<TUser>(`${API_BASE_URL}/users`, input);
        const user: TAuthUser = { id: response.data.id, name: response.data.name, email: response.data.email };
        return user;
    }catch(error) {
        if(axios.isAxiosError(error)){
         return rejectWithValue(error.response?.data.message|| error.message);
        }else{
            return rejectWithValue("An unexpected error");
        }
    }
});

export default actRegister;
