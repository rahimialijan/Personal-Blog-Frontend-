import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
    const response = await axios.post('http://localhost:3000/api/v1/v1/users', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error.message;
  }
});
