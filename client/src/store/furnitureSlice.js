import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  types: [],
  brands: [],
  furnitures: [],
  selectedType: {},
  selectedBrand: {},
  page: 1,
  totalCount: 0,
  limit: 3,
}

const furnitureSlice = createSlice({
  name: 'furniture',
  initialState,
  reducers: {
    setTypes: (state, action) => {
      state.types = action.payload
    },
    setBrands: (state, action) => {
      state.brands = action.payload
    },
    setFurnitures: (state, action) => {
      state.furnitures = action.payload
    },
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

    setTotalCount: (state, action) => {
      state.totalCount = action.payload
    },

    setReset: (state, action) => {
      state.selectedBrand = {}
      state.selectedType = {}
    },
  },
})

export const {
  setBrands,
  setFurnitures,
  setSelectedType,
  setTypes,
  setSelectedBrand,
  setPage,
  setTotalCount,
  setReset,
} = furnitureSlice.actions
export default furnitureSlice.reducer
