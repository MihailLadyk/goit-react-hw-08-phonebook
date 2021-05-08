import Layout from '../components/Layout';
import CreateContactForm from '../components/forms/CreateContactForm';
import ContactsList from '../components/ContactsList';
import Filter from '../components/Filter';

function ContactsView() {
  return (
    <Layout title="Contacts">
      <CreateContactForm />
      <Filter />
      <ContactsList />
    </Layout>
  );
}

export default ContactsView;
