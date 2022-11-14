import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit'


const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const addContact = createAction('contacts/addContact');
export const deleteContact = createAction('contacts/deleteContact');

const myReducer = createReducer(initialContacts, {
    [addContact]: (state, action) => [...state, action.payload],
    [deleteContact]: (state, action) => state.filter(({id}) => id !== action.payload)
})

export const store = configureStore({
    reducer: {
      contacts: myReducer,
  },
})