import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { $authHost, $host } from '../http'

const initialState = {
  furnitures: [],
  selectedType: {},
  selectedBrand: {},
  page: 1,
  totalCount: 0,
  limit: 8,
  error: null,
  status: 'idle',
}

export const fetchFurnitures = createAsyncThunk(
  'furniture/fetch-furnitures',
  async ({ typeId, brandId, page, limit = 10 }, { rejectWithValue }) => {
    try {
      const { data } = await $host.get('api/furniture', {
        params: { typeId, brandId, page, limit },
      })
      return data
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      }

      return rejectWithValue('Unknown error')
    }
  }
)

export const fetchOneFurniture = createAsyncThunk(
  'furniture/fetch-one-furniture',
  async ({ id, setFurniture }, { rejectWithValue }) => {
    try {
      const { data } = await $host.get('api/furniture/' + id)
      setFurniture(data)
      return data
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      }

      return rejectWithValue('Unknown error')
    }
  }
)

export const createFurniture = createAsyncThunk(
  'furniture/create-furniture',
  async ({ formData, onHide }, { rejectWithValue }) => {
    try {
      const { data } = await $authHost.post('api/furniture', formData)
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

const furnitureSlice = createSlice({
  name: 'furniture',
  initialState,
  reducers: {
    setSelectedType: (state, action) => {
      state.page = 1
      state.selectedType = action.payload
    },
    setSelectedBrand: (state, action) => {
      state.page = 1
      state.selectedBrand = action.payload
    },
    setPage: (state, action) => {
      state.page = action.payload
    },
    setReset: (state, action) => {
      state.selectedBrand = {}
      state.selectedType = {}
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFurnitures.fulfilled, (state, actions) => {
        state.furnitures = actions.payload.rows
        state.totalCount = actions.payload.count
      })
      .addCase(fetchFurnitures.rejected, (state, actions) => {
        state.status = 'rejected'
        state.error = actions.payload || 'Cannot load data'
      })
      .addCase(fetchFurnitures.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
  },
})

export const {
  setSelectedType,
  setTypes,
  setSelectedBrand,
  setPage,
  setTotalCount,
  setReset,
} = furnitureSlice.actions
export default furnitureSlice.reducer
