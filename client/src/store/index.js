import { configureStore } from '@reduxjs/toolkit'
import userRecucer from './userSlice'
import furnitureReducer from './furnitureSlice'
import { typesReducer } from './typeSlice'
import { brandsReducer } from './brandSlice'

export const store = configureStore({
  reducer: {
    user: userRecucer,
    furniture: furnitureReducer,
    types: typesReducer,
    brands: brandsReducer,
  },
})
