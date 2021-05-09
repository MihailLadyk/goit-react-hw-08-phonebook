import { connect } from 'react-redux';
import { TextField, Box } from '@material-ui/core';

import * as contactsActions from '../redux/contacts/contactsActions';
import * as contactsSelectors from '../redux/contacts/contactsSelectors';

function Filter({ filter, changeFilter }) {
  return (
    <Box my={2}>
      <TextField
        variant="outlined"
        fullWidth
        autoComplete="off"
        placeholder="Filter"
        label="Filter"
        type="search"
        value={filter}
        onChange={changeFilter}
      />
    </Box>
  );
}

const mapStateToProps = (state) => ({
  filter: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = {
  changeFilter: (e) => contactsActions.changeFilter(e.target.value),
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
