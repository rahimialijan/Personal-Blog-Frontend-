import { createSlice } from '@reduxjs/toolkit';
import {
  updatePost, deletePost, createPost, fetchPosts,
} from './postActions';
import { loginUser, logoutUser, createUser } from './authActions';

const initialState = {
  posts: [],
  loading: false,
  error: null,
  isAuthenticated: false,
  loginError: null,
};

const postSlice = createSlice({
  name: 'posts',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(fetchPosts.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(fetchPosts.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        posts: action.payload,
        error: null,
      }))
      .addCase(fetchPosts.rejected, (state) => ({
        ...state,
        loading: false,
        error: null,
      }))
      .addCase(deletePost.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        posts: state.posts.filter((post) => post.id !== action.payload),
        error: null,
      }))
      .addCase(deletePost.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(deletePost.rejected, (state) => ({
        ...state,
        loading: false,
        error: null,
      }))
      .addCase(updatePost.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(updatePost.fulfilled, (state, action) => {
        // eslint-disable-next-line max-len
        const updatePosts = state.posts.map((post) => (post.id === action.payload.id ? action.payload : post));
        return {
          ...state,
          posts: updatePosts,
          loading: false,
          error: null,
        };
      })
      .addCase(updatePost.rejected, (state) => ({
        ...state,
        loading: false,
        error: null,
      }));
    builder
      .addCase(loginUser.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.loginError = null; // Reset login error on successful login
      })
      .addCase(loginUser.rejected, (state, action) => ({
        ...state,
        loading: false,
        isAuthenticated: false,
        loginError: action.error.message || 'Login failed',
      }))
      .addCase(logoutUser.fulfilled, (state) => ({
        ...state,
        isAuthenticated: false,
      }))
      .addCase(createUser.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(createUser.fulfilled, (state) => ({
        ...state,
        loading: false,
        isAuthenticated: true,
        error: null,
      }))
      .addCase(createUser.rejected, (state, action) => ({
        ...state,
        loading: false,
        isAuthenticated: false,
        error: action.error.message || 'User registration failed',
      }));
  },
});

export default postSlice.reducer;
