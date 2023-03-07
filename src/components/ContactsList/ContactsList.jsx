import React from 'react';
import PropTypes from 'prop-types';
import { ContactStyled } from './ContactsStyled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactStyled>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className="contactItem">
            <span>{contact.name} </span>
            <span> {contact.number} </span>
            <button type="button" onClick={() => onDeleteContact(contact.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ContactStyled>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,    
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}