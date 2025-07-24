import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Replace this with a real API URL if available.
const API_URL = 'https://api.lorem.com/ipsum';

// Async thunk to fetch data
export const fetchLorem = createAsyncThunk('lorem/fetchLorem', async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Failed to fetch Lorem data');
  const data = await response.json(); // Expecting { title: "...", body: "..." }
  return data;
});

const loremSlice = createSlice({
  name: 'lorem',
  initialState: {
    loading: false,
    error: null,
    title: '',
    body: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLorem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLorem.fulfilled, (state, action) => {
        state.loading = false;
        state.title = action.payload.title;
        state.body = action.payload.body;
      })
      .addCase(fetchLorem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default loremSlice.reducer;
