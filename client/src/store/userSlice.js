import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: true,
  user: {},
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload
    },
    setUser: (state, action) => {
      state.isAuth = action.payload
    },
  },
})

export const { setIsAuth } = userSlice.actions
export default userSlice.reducer
