import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Function to generate short lorem text
const generateShortLorem = (n) => {
  const titles = [
    "Lorem ipsum dolor sit amet",
    "Sed ut perspiciatis unde",
    "At vero eos et accusamus",
    "Nemo enim ipsam",
    "Ut enim ad minima veniam",
    "Neque porro quisquam est",
    "Excepteur sint occaecat",
    "Duis aute irure dolor",
    "Quis autem vel eum",
    "Magni dolores eos"
  ];

  const bodies = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Vestibulum ante ipsum primis in faucibus orci luctus.",
    "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis.",
    "Donec ullamcorper nulla non metus auctor fringilla.",
    "Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",
    "Maecenas faucibus mollis interdum.",
    "Sed posuere consectetur est at lobortis.",
    "Integer posuere erat a ante venenatis dapibus.",
    "Curabitur blandit tempus porttitor."
  ];

  return Array.from({ length: n }, (_, i) => ({
    title: titles[i % titles.length],
    body: bodies[i % bodies.length]
  }));
};

export const fetchLorem = createAsyncThunk('lorem/fetchLorem', async () => {
  // Generate 10 items
  const data = generateShortLorem(10);
  return data;
});

const loremSlice = createSlice({
  name: 'lorem',
  initialState: {
    data: [],
    loading: true,  // loading true by default for test
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
