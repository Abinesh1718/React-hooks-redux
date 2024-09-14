import { configureStore } from "@reduxjs/toolkit";
import CartSLice from './slice'

const store = configureStore({
    name: 'CartStore',
    reducer: CartSLice
})

export default store