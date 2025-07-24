import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Mock API or real API URL
export const fetchLorem = createAsyncThunk('lorem/fetchLorem', async () => {
  // Example of mock data (replace with real fetch if needed)
  const data = Array.from({ length: 10 }, (_, i) => ({
    title: `Title ${i + 1}`,
    body: `Body content for item ${i + 1}, lorem ipsum dolor sit amet...`,
  }));
  return data;
});

const loremSlice = createSlice({
  name: 'lorem',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLorem.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLorem.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchLorem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default loremSlice.reducer;
