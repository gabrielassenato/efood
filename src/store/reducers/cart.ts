import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Cardapio } from "../../services/api"

type CartState = {
    items: Cardapio[]
    isOpen: boolean
}

const initialState: CartState = {
    items: [],
    isOpen: false 
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Cardapio>) => {
            state.items.push(action.payload)
        },
        remove: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        },

        clear: (state) => {
            state.items = []
        }
    }
})

export const { add, remove, open, close, clear } = cartSlice.actions
export default cartSlice.reducer