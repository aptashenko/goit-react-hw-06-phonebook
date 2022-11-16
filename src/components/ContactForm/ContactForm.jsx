import React from 'react';
import css from './contactForm.module.css';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from "react-redux";
import { addContact } from  "redux/slicers/contactsSlice";

export default function ContactForm() {
    const initialContacts = useSelector(state => state.contacts);
    const dispatch = useDispatch();

    const addToAllContact = (e) => {
        e.preventDefault();
        const data = {};
        data.id = nanoid();
        data.name = e.target.elements.name.value;
        data.number = e.target.elements.number.value;
        const isContactExist = initialContacts.some(({name}) => name === data.name);
            if (isContactExist) {
                alert(`${data.name} is alredy in contacts`);
            } else {
                dispatch(addContact(data));
            }
        e.target.reset();
    }
    
    // const handleInput = (e) => {
    //     switch (e.target.name) {
    //         case 'name':
    //             setName(e.target.value);
    //             break
    //         case 'number':
    //             setNumber(e.target.value);
    //             break
    //         default:
    //             return
    //     }
    // }
        return (
            <form className={css.form} onSubmit={addToAllContact} >
                <label className={css.label}>Name
                    <input
                        className={css.input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label className={css.label}>Number
                    <input
                        className={css.input}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button className={css.button}>Add contact</button>
            </form>
        )
}