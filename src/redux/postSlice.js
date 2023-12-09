import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const POST_API = 'http://localhost:3000/api/v1/posts';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async()=>{
    try {
        const response = await axios.get(POST_API);
        return response.data
    }
    catch (error){
        throw error.message;
    }
})

const initialState = {
    posts: [],
    loading: false,
    error: null
}


const postSlice = createSlice({
    name: 'posts',
    initialState,

    extraReducers: (builder) =>{
        builder
            .addCase(fetchPosts.pending, (state) =>({
                ...state,
                loading: true,
                error: null
            }))
            .addCase(fetchPosts.fulfilled, (state, action) =>({
                ...state,
                loading: false,
                posts: action.payload,
                error: null
            }))
            .addCase(fetchPosts.rejected, (state) =>({
                ...state,
                loading: false,
                error: null
            }))

    }
})

export default postSlice.reducer