import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { $authHost, $host } from '../http'

const initialState = {
  brands: [],
  error: null,
  status: 'idle',
}

export const fetchBrands = createAsyncThunk(
  'brand/fetch-brands',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await $host.get('api/brand')
      return data
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      }

      return rejectWithValue('Unknown error')
    }
  }
)

export const createBrand = createAsyncThunk(
  'brand/createBrand',
  async ({ name, setValue, onHide }, { rejectWithValue }) => {
    try {
      const { data } = await $authHost.post('api/brand', { name })
      setValue('')
      onHide()
      return data
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      }

      return rejectWithValue('Unknown error')
    }
  }
)

const typesSlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.fulfilled, (state, actions) => {
        state.status = 'received'
        state.brands = actions.payload
      })
      .addCase(fetchBrands.rejected, (state, actions) => {
        state.status = 'rejected'
        state.error = actions.payload || 'Cannot load data'
      })
      .addCase(fetchBrands.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
  },
})

export const brandsReducer = typesSlice.reducer
