import { configureStore } from '@reduxjs/toolkit';
import { contactsSlicer } from './slicers/contactsSlice';
import { filterSlicer } from './slicers/filterSlice';


export const store = configureStore({
    reducer: {
        contacts: contactsSlicer.reducer,
        filter: filterSlicer.reducer,
  },
})