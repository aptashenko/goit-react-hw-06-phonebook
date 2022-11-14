import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit'


const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const localStorageContacts = localStorage.getItem('contacts') ? JSON.parse(localStorage.getItem('contacts')) : initialContacts;

const contactsSlicer = createSlice({
    name: 'allContacts',
    initialState: localStorageContacts,
    reducers: {
        addContact(state, action) {
            state.push(action.payload);
        },
        deleteContact(state, action) {
           return state.filter(item => item.id !== action.payload);
        }
    }
})

const filterSlicer = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        setFilter(state, action) {
            return state = action.payload;
        }
    }
})

export const { addContact, deleteContact } = contactsSlicer.actions;
export const { setFilter } = filterSlicer.actions;

export const store = configureStore({
    reducer: {
        contacts: contactsSlicer.reducer,
        filter: filterSlicer.reducer,
  },
})