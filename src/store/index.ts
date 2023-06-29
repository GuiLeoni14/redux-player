import { configureStore, createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {},
})

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
})
