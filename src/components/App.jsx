import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Title from "./Title/Title";
import Filter from "./Filter/Filter";
import ContactItem from "./ContactItem/ContactItem";
import { addContact, deleteContact, setFilter } from "redux/store";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function App() {

  const initialContacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  
  const dispatch = useDispatch();

  const handleContactForm = (data) => {
    const isContactExist = initialContacts.some(({name}) => name === data.name);
    if (isContactExist) {
      alert(`${data.name} is alredy in contacts`);
    } else {
      dispatch(addContact(data));
    }
  }

  const handleFilter = (e) => {
    dispatch(setFilter(e.target.value.toLowerCase()));
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
