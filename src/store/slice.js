import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const CartSLice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addcart: (state, actions) => {
            state.push(actions.payload)
        },
        remove: (state, actions) => {
            state = state.filter((data, i) => i !== actions.payload)
        }
    },
})

export default CartSLice.reducer
export const { addcart, remove } = CartSLice.actions

