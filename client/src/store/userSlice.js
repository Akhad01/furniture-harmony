import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
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
      state.user = action.payload
    },
    userLoggedOut: (state) => {
      state.isAuth = false
      state.user = null
    },
  },
})

export const { setIsAuth, setUser, userLoggedOut } = userSlice.actions
export default userSlice.reducer

// export const logOut = () => (dispatch) => {
//   localStorage.removeItem('token')
//   dispatch(userLoggedOut())
// }
