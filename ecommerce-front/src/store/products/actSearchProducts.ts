import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { TProduct } from '@customTypes/product';
import { API_BASE_URL } from '@util/apiConfig';

type TResponse= TProduct[];

const actSearchProducts = createAsyncThunk(
    "products/actSearchProducts",
     async (query:string, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
        // This json-server build ignores `title_like`/`q` filters (returns the
        // full collection unfiltered), so filter client-side instead.
        const response = await axios.get<TResponse>(`${API_BASE_URL}/products`);
        const normalizedQuery = query.trim().toLowerCase();
        return response.data.filter((product) => product.title.toLowerCase().includes(normalizedQuery));
    }catch(error) {
        if(axios.isAxiosError(error)){
         return rejectWithValue(error.response?.data.message|| error.message);
        }else{
            return rejectWithValue("An unexpected error");
        }
    }
});

export default actSearchProducts;
