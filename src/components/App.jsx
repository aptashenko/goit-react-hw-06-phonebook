import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Title from "./Title/Title";
import Filter from "./Filter/Filter";
import ContactItem from "./ContactItem/ContactItem";
import { addContact, deleteContact } from "redux/store";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

export default function App() {

  const initialContacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();


  const [filter, setFilter] = useState('');

  const handleContactForm = (data) => {
    const isContactExist = initialContacts.some(({name}) => name === data.name);
    if (isContactExist) {
      alert(`${data.name} is alredy in contacts`);
    } else {
      dispatch(addContact(data));
    }
  }

  const handleFilter = (e) => {
    setFilter(e.target.value.toLowerCase());
  }

  const filteredContacts = initialContacts.filter(({name}) => name.toLowerCase().includes(filter));

  const deleteUser = (deleteId) => {
    dispatch(deleteContact(deleteId))
  }

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(initialContacts))
  }, [initialContacts])

    return (
      <div className="wrapper">
        <Title title='PhoneBook'>
          <ContactForm handleContactForm={handleContactForm} />
        </Title>
        <Title title='Contacts'>
          <Filter onChange={handleFilter} />
          <ContactList>
            <ContactItem contacts={filteredContacts} deleteContact={deleteUser} />
          </ContactList>
        </Title>
      </div>
    )
}
