import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Title from "./Title/Title";
import Filter from "./Filter/Filter";
import ContactItem from "./ContactItem/ContactItem";

export default function App() {

    return (
      <div className="wrapper">
        <Title title='PhoneBook'>
          <ContactForm />
        </Title>
        <Title title='Contacts'>
          <Filter />
          <ContactList>
            <ContactItem />
          </ContactList>
        </Title>
      </div>
    )
}
