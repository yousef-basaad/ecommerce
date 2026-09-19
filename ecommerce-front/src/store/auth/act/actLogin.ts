import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { TUser, TAuthUser } from '@customTypes/user';
import { API_BASE_URL } from '@util/apiConfig';

type TLoginInput = { email: string; password: string };

const actLogin = createAsyncThunk("auth/actLogin", async (input: TLoginInput, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
        const response = await axios.get<TUser[]>(
          `${API_BASE_URL}/users?email=${encodeURIComponent(input.email)}&password=${encodeURIComponent(input.password)}`
        );
        const found = response.data[0];
        if (!found) {
            return rejectWithValue("Invalid email or password");
        }
        const user: TAuthUser = { id: found.id, name: found.name, email: found.email };
        return user;
    }catch(error) {
        if(axios.isAxiosError(error)){
         return rejectWithValue(error.response?.data.message|| error.message);
        }else{
            return rejectWithValue("An unexpected error");
        }
    }
});

export default actLogin;
