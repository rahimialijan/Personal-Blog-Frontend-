import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const POST_API = 'http://localhost:3000/api/v1/posts';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    const response = await axios.get(POST_API);
    return response.data;
  } catch (error) {
    throw error.message;
  }
});

export const createPost = createAsyncThunk('posts/createPost', async (formData) => {
  try {
    const response = await axios.post(POST_API, formData);
    return response.data;
  } catch (error) {
    throw error.message;
  }
});

export const deletePost = createAsyncThunk('posts/deletePost', async (postId) => {
  try {
    await axios.delete(`${POST_API}/${postId}`);
    return postId;
  } catch (error) {
    throw error.message;
  }
});

export const updatePost = createAsyncThunk('posts/updatePost', async ({ postId, formData }) => {
  try {
    const response = await axios.put(`${POST_API}/${postId}`, formData);
    return response.data;
  } catch (error) {
    throw error.message;
  }
});


export const loginUser = createAsyncThunk('user/loginUser', async ({ email, password }) => {
  try {
    const response = await axios.post('http://localhost:3000/api/v1/login', { email, password });
    return response.data;
  } catch (error) {
    throw error.message;
  }
});

export const logoutUser = createAsyncThunk('user/logoutUser', async () => {
  try {
    await axios.delete('http://localhost:3000/api/v1/logout');
    return null;
  } catch (error) {
    throw error.message;
  }
});


export const createUser = createAsyncThunk('user/createUser', async (formData) => {
  try {
    const response = await axios.post('http://localhost:3000/api/v1/users', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error.message;
  }
});