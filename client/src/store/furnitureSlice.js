import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  types: [],
  brands: [],
  furnitures: [],
  selectedType: {},
  selectedBrand: {},
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
      state.selectedType = action.payload
    },
    setSelectedBrand: (state, action) => {
      state.selectedBrand = action.payload
    },
  },
})

export const {
  setBrands,
  setFurnitures,
  setSelectedType,
  setTypes,
  setSelectedBrand,
} = furnitureSlice.actions
export default furnitureSlice.reducer
