import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts, fetchProductById } from '../api/products';

const STORAGE_KEY = 'clothify-filters';
const sizeOptions = ['S', 'M', 'L', 'XL'];

const loadFilters = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : { search: '', category: 'All', size: 'All' };
  } catch (error) {
    return { search: '', category: 'All', size: 'All' };
  }
};

const saveFilters = (filters) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filters));
};

const getSize = (id) => sizeOptions[id % sizeOptions.length];

export const loadProducts = createAsyncThunk('products/loadProducts', async () => {
  const raw = await fetchAllProducts();
  return raw.products.map((product) => ({
    ...product,
    size: getSize(product.id),
  }));
});

export const loadProductById = createAsyncThunk('products/loadProductById', async (id) => {
  const product = await fetchProductById(id);
  return {
    ...product,
    size: getSize(product.id),
  };
});

const initialFilters = loadFilters();

const initialState = {
  items: [],
  categories: [],
  sizes: sizeOptions,
  status: 'idle',
  error: null,
  selectedProduct: null,
  selectedStatus: 'idle',
  selectedError: null,
  filters: initialFilters,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearch(state, action) {
      state.filters.search = action.payload;
      saveFilters(state.filters);
    },
    setCategory(state, action) {
      state.filters.category = action.payload;
      saveFilters(state.filters);
    },
    setSize(state, action) {
      state.filters.size = action.payload;
      saveFilters(state.filters);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        state.categories = ['All', ...Array.from(new Set(action.payload.map((product) => product.category)))];
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Unable to load products';
      })
      .addCase(loadProductById.pending, (state) => {
        state.selectedStatus = 'loading';
        state.selectedError = null;
      })
      .addCase(loadProductById.fulfilled, (state, action) => {
        state.selectedStatus = 'succeeded';
        state.selectedProduct = action.payload;
      })
      .addCase(loadProductById.rejected, (state, action) => {
        state.selectedStatus = 'failed';
        state.selectedError = action.error.message || 'Unable to load product details';
      });
  },
});

export const { setSearch, setCategory, setSize } = productsSlice.actions;
export default productsSlice.reducer;
