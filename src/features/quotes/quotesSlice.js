import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchQuotes = createAsyncThunk(
    'users/fetchByIdStatus',
    async (quotes, thunkAPI) => {
        try {
            const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${quotes}`)
            const data = await response.json();

            return data
        } catch (error) {
            return error
        }

    },
)

const quotesSlice = createSlice({
    name: 'quotes',
    initialState: {
        quotes: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchQuotes.fulfilled, (state, action) => {
            state.quotes = action.payload;
        })
    }
})

export default quotesSlice.reducer