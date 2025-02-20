import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increament(state) {
      state.count++
    }
  }
})

export const { increament } = counterSlice.actions
export const counterReducer = counterSlice.reducer
