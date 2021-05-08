import { Component } from 'react';
import { connect } from 'react-redux';
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  Typography,
  Button,
} from '@material-ui/core';

import * as contactsSelectors from '../redux/contacts/contactsSelectors';
import * as contactsOperations from '../redux/contacts/contactsOperations';

class ContactsList extends Component {
  componentDidMount() {
    this.props.fetchAllContacts();
  }

  render() {
    const { contacts, deleteContact } = this.props;

    return (
      <List>
        {contacts.map((contact) => (
          <ListItem key={contact.id}>
            <div>
              <Typography variant="h3" component="p">
                {contact.name}
              </Typography>
              <Typography variant="subtitle1" component="p">
                {contact.number}
              </Typography>
            </div>

            <ListItemSecondaryAction>
              <Button type="button" onClick={() => deleteContact(contact.id)}>
                Delete
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getFilteredContacts(state),
  loading: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = {
  fetchAllContacts: contactsOperations.fetchAllContacts,
  deleteContact: contactsOperations.deleteContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
