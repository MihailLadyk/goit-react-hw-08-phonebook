import { Typography, Container } from '@material-ui/core';

function Layout({ title, children }) {
  return (
    <Container>
      <Typography variant="h4" component="h1">
        {title}
      </Typography>

      {children}
    </Container>
  );
}

export default Layout;
