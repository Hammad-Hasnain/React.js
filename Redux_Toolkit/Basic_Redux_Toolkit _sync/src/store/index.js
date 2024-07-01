import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice'

const STORE = configureStore({
    reducer: {
        counterReducer
    }
})

export default STORE