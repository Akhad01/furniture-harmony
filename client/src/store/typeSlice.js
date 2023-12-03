import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { $authHost, $host } from '../http'

const initialState = {
  types: [],
  error: null,
  status: 'idle',
}

export const fetchTypes = createAsyncThunk(
  'type/fetch-types',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await $host.get('api/type')
      return data
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      }
      return rejectWithValue('Unknown error')
    }
  }
)

export const createType = createAsyncThunk(
  'type/createType',
  async ({ name, setValue, onHide }, { rejectWithValue }) => {
    try {
      const { data } = await $authHost.post('api/type', { name })
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
  name: 'type',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTypes.fulfilled, (state, actions) => {
        state.status = 'received'
        state.types = actions.payload
      })
      .addCase(fetchTypes.rejected, (state, actions) => {
        state.status = 'rejected'
        state.error = actions.payload || 'Cannot load data'
      })
      .addCase(fetchTypes.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
  },
})

export const typesReducer = typesSlice.reducer
