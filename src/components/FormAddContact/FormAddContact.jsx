import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledFormAddContacts } from './FormAddContact.styled';

const FormAddContact = ({ onAddContact }) => {
  const [contact, setContact] = useState({ name: '', number: '' });

  const handleChange = ({ target: { name, value } }) => {
    // const { name, value } = e.target;
    // const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    onAddContact(contact);

    reset();
  };

  const reset = () => {
    setContact({ name: '', number: '' });
  };

  return (
    <StyledFormAddContacts onSubmit={handleSubmit}>
      <label className="label">
        <span>Name</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={contact.name}
          onChange={handleChange}
        />
      </label>
      <label className="label">
        <span>Number</span>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          // value={this.state.number}
          required
          value={contact.number}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </StyledFormAddContacts>
  );
};

FormAddContact.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default FormAddContact;
