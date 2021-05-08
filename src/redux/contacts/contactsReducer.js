import { createReducer, combineReducers } from '@reduxjs/toolkit';

import * as actions from './contactsActions';

const contactsReducer = createReducer([], {
  [actions.fetchAllContactsSuccess]: (state, action) => action.payload,
  [actions.addContactSuccess]: (state, action) => [...state, action.payload],
  [actions.deleteContactSuccess]: (state, action) =>
    state.filter((contacts) => contacts.id !== action.payload),
});

const loadingReducer = createReducer(false, {
  // Fetch All Contacts
  [actions.fetchAllContactsRequest]: () => true,
  [actions.fetchAllContactsSuccess]: () => false,
  [actions.fetchAllContactsError]: () => false,
  // Add Contact
  [actions.addContactRequest]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => false,
  // Delete Contact
  [actions.deleteContactRequest]: () => true,
  [actions.deleteContactSuccess]: () => false,
  [actions.deleteContactError]: () => false,
});

const errorReducer = createReducer(null, {
  // Fetch All Contacts
  [actions.fetchAllContactsRequest]: () => null,
  [actions.fetchAllContactsError]: (state, action) => action.payload,
  // Add Contact
  [actions.addContactRequest]: () => null,
  [actions.addContactError]: (state, action) => action.payload,
  // Delete Contact
  [actions.deleteContactRequest]: () => null,
  [actions.deleteContactError]: (state, action) => action.payload,
});

const filterReducer = createReducer('', {
  [actions.changeFilter]: (state, action) => action.payload,
});

export default combineReducers({
  items: contactsReducer,
  loading: loadingReducer,
  error: errorReducer,
  filter: filterReducer,
});
