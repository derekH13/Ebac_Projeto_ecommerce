import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ComidaCardapio } from '../../interface/interface'

type stateCart = {
  items: ComidaCardapio[]
}

const initialState: stateCart = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<ComidaCardapio>) => {
      state.items.push(action.payload)
    }
  }
})

export const { adicionar } = cartSlice.actions

export default cartSlice.reducer
