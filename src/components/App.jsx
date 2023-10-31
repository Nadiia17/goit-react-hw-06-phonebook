import { useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { AppContainer, Subtitle, Title } from './App.styled';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const handleAddContact = newContact => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const handleChange = evt => {
    setFilter(evt.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <AppContainer>
      <Title>Phonebook</Title>
      <ContactForm onFormSubmit={handleAddContact} currentContacts={contacts} />
      <Subtitle>Contacts</Subtitle>
      <Filter value={filter} onChange={handleChange} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </AppContainer>
  );
};
