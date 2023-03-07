import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { ContactList } from './ContactsList/ContactsList';
import FormAddContact from './FormAddContact/FormAddContact';
import { Notify } from 'notiflix';
import { StyledTitle } from './TitleStyled';
import { Filter } from './Filter/Filter';

class App extends Component { 
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione', number: '443-89-12' },
      { id: 'id-3', name: 'Eden', number: '645-17-79' },
      { id: 'id-4', name: 'Annie', number: '227-91-26' },
    ],
    filter: '',
  };

  onAddContact = contact => {
    // console.log(contact);
    if (this.state.contacts.some(el => el.name === contact.name)) {
      Notify.warning(
        `${contact.name} is already in contact list.`
      );
      return;
    }

    const newContact = {
      id: nanoid(),
      ...contact,
    };

    this.setState(prevState => {
      return { contacts: [newContact, ...prevState.contacts] };
    });
    // contact: [newContact, ...this.state.contacts]
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  onDeleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(item => item.id !== contactId)
    })
  };

  componentDidMount() {
    
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
    
}

  componentDidUpdate(prevProps, prevState) {

    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    } 
  }
  
  render() {
    return (
      <div>
        <StyledTitle>Phonebook</StyledTitle>
        <FormAddContact onAddContact={this.onAddContact} />
        <StyledTitle>Contacts</StyledTitle>
        <Filter value={this.state.filter} getFilteredFriend={this.changeFilter} />
        <ContactList
          contacts={this.getFilteredContact()}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}

export default App;
