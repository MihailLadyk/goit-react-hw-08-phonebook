import { Box, Typography } from '@material-ui/core';

function Message({ children }) {
  return (
    <Box my={2}>
      <Typography variant="h4" component="h4" style={{ color: 'red' }}>
        {children}
      </Typography>
    </Box>
  );
}

export default Message;
