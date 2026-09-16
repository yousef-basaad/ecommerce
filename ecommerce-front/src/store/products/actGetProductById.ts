import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { TProduct } from '@customTypes/product';
import { API_BASE_URL } from '@util/apiConfig';

const actGetProductById = createAsyncThunk(
    "products/actGetProductById",
     async (id:string, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
        // json-server's /products/:id route 404s when the stored id is a number
        // (it path-matches ids as strings), so query-filter by id instead.
        const response = await axios.get<TProduct[]>(`${API_BASE_URL}/products?id=${encodeURIComponent(id)}`);
        const found = response.data[0];
        if (!found) {
            return rejectWithValue("Product not found");
        }
        return found;
    }catch(error) {
        if(axios.isAxiosError(error)){
         return rejectWithValue(error.response?.data.message|| error.message);
        }else{
            return rejectWithValue("An unexpected error");
        }
    }
});

export default actGetProductById;
