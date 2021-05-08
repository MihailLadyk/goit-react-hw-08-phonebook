import { Box, Link } from '@material-ui/core';
import { Link as RLink } from 'react-router-dom';

function NavLink({ to, children }) {
  return (
    <Box display="inline" marginRight={1.5}>
      <Link component={RLink} to={to} color="inherit">
        {children}
      </Link>
    </Box>
  );
}

export default NavLink;
