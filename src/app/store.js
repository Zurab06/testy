import {configureStore} from '@reduxjs/toolkit'
import  quotesSlice  from '../features/quotes/quotesSlice'

export const store = configureStore({
    reducer: {
        quotes: quotesSlice,
    },
    
})