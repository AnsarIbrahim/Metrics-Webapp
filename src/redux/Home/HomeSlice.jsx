import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

export const fetchData = createAsyncThunk('home/fetchData', async (num) => {
  try {
    const BaseUrl = `https://api-thirukkural.vercel.app/api?num=${num}`;
    const response = await fetch(BaseUrl);
    if (!response.ok) {
      throw new Error('Failed to Fetch data from the API');
    }
    const data = await response.json();
    return { ...data, num };
  } catch (error) {
    throw new Error('Failed to Fetch data from the API');
  }
});

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(fetchData.pending, (state) => {
        const newState = state;
        newState.status = 'loading';
        newState.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        const newState = state;
        newState.status = 'succeeded';
        newState.data.push(action.payload);
      })
      .addCase(fetchData.rejected, (state, action) => {
        const newState = state;
        newState.status = 'failed';
        newState.error = action.error.message;
      });
  },
});

export default homeSlice.reducer;
