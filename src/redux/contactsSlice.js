import { nanoid } from 'nanoid';

const initialState = {
  contacts: [],
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contact/addContact':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case 'contact/deleteContact':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const addContact = (name, number) => ({
  type: 'contact/addContact',
  payload: {
    name,
    number,
    id: nanoid(),
  },
});

export const deleteContact = id => ({
  type: 'contact/deleteContact',
  payload: id,
});
