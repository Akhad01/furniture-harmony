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
  ],
  furnitures: [
    {
      id: 1,
      name: 'Стул LION',
      price: 100,
      rating: 4,
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmiol-mebel.by%2Fstul-ozzy-g062-03-ru&psig=AOvVaw3CJIyyvKgrjkEvVRLbF43r&ust=1701007451836000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPC4-tmo34IDFQAAAAAdAAAAABAE',
    },
    {
      id: 2,
      name: 'Диван Монако',
      price: 500,
      rating: 4,
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmiol-mebel.by%2Fstul-ozzy-g062-03-ru&psig=AOvVaw3CJIyyvKgrjkEvVRLbF43r&ust=1701007451836000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPC4-tmo34IDFQAAAAAdAAAAABAE',
    },
    {
      id: 3,
      name: 'Шкаф 4С2Я',
      price: 400,
      rating: 5,
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmiol-mebel.by%2Fstul-ozzy-g062-03-ru&psig=AOvVaw3CJIyyvKgrjkEvVRLbF43r&ust=1701007451836000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPC4-tmo34IDFQAAAAAdAAAAABAE',
    },
    {
      id: 4,
      name: 'Стол',
      price: 300,
      rating: 3,
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmiol-mebel.by%2Fstul-ozzy-g062-03-ru&psig=AOvVaw3CJIyyvKgrjkEvVRLbF43r&ust=1701007451836000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPC4-tmo34IDFQAAAAAdAAAAABAE',
    },
  ],
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
  },
})

export const { setIsAuth } = furnitureSlice.actions
export default furnitureSlice.reducer
