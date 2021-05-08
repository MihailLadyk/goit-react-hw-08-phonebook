import axios from 'axios';

import * as actions from './contactsActions';

export const fetchAllContacts = () => (dispatch) => {
  dispatch(actions.fetchAllContactsRequest());
  axios
    .get('/contacts')
    .then((res) => dispatch(actions.fetchAllContactsSuccess(res.data)))
    .catch((error) => dispatch(actions.fetchAllContactsError(error)));
};

export const addContact = (contact) => (dispatch) => {
  dispatch(actions.addContactRequest());

  axios
    .post('/contacts', contact)
    .then((res) => dispatch(actions.addContactSuccess(res.data)))
    .catch((error) => dispatch(actions.addContactError(error)));
};

export const deleteContact = (contactId) => (dispatch) => {
  dispatch(actions.deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then((res) => dispatch(actions.deleteContactSuccess(contactId)))
    .catch((error) => dispatch(actions.deleteContactError(error)));
};
