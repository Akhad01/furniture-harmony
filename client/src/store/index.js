import { configureStore } from '@reduxjs/toolkit'
import userRecucer from './userSlice'
import furnitureReducer from './furnitureSlice'

export const store = configureStore({
  reducer: {
    user: userRecucer,
    furniture: furnitureReducer,
  },
})
