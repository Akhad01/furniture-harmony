import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  types: [
    {
      id: 1,
      name: 'кровать',
    },
    {
      id: 2,
      name: 'Тумба',
    },
  ],
  brands: [
    {
      id: 1,
      name: 'IKEA',
    },
    {
      id: 2,
      name: 'Kartell',
    },
    {
      id: 3,
      name: 'IKEA',
    },
  ],
  furnitures: [
    {
      id: 1,
      name: 'Стул LION',
      price: 100,
      rating: 4,
      img: 'https://i4.stat01.com/1/8996/89953788/afacdb/stol-verdi-11.jpg',
    },
    {
      id: 2,
      name: 'Диван Монако',
      price: 500,
      rating: 4,
      img: 'https://i4.stat01.com/1/8996/89953788/afacdb/stol-verdi-11.jpg',
    },
    {
      id: 3,
      name: 'Шкаф 4С2Я',
      price: 400,
      rating: 5,
      img: 'https://i4.stat01.com/1/8996/89953788/afacdb/stol-verdi-11.jpg',
    },
    {
      id: 4,
      name: 'Стол',
      price: 300,
      rating: 3,
      img: 'https://i4.stat01.com/1/8996/89953788/afacdb/stol-verdi-11.jpg',
    },
    {
      id: 5,
      name: 'Стол',
      price: 300,
      rating: 3,
      img: 'https://i4.stat01.com/1/8996/89953788/afacdb/stol-verdi-11.jpg',
    },
    {
      id: 6,
      name: 'Стол',
      price: 300,
      rating: 3,
      img: 'https://i4.stat01.com/1/8996/89953788/afacdb/stol-verdi-11.jpg',
    },
  ],
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
