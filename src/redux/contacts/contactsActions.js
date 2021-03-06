import { createAction } from '@reduxjs/toolkit';

export const fetchAllContactsRequest = createAction(
  'contacts/fetchAllContactsRequest'
);
export const fetchAllContactsSuccess = createAction(
  'contacts/fetchAllContactsSuccess'
);
export const fetchAllContactsError = createAction(
  'contacts/fetchAllContactsError'
);

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest'
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess'
);
export const deleteContactError = createAction('contacts/deleteContactError');

export const changeFilter = createAction('contacts/changeFilter');
