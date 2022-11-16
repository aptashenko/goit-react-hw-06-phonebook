import { createSlice } from '@reduxjs/toolkit'

export const filterSlicer = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        setFilter(state, action) {
            return state = action.payload;
        }
    }
})


export const { setFilter } = filterSlicer.actions;
