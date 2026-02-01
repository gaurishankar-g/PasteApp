import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from './Redux/pasteSlice.js'
export const store = configureStore({
    reducer: {
        paste: pasteReducer
    },
})