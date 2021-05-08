import { AppBar, Toolbar, Typography, Box, Button } from "@material-ui/core";
import * as authSelectors from "../redux/auth/authSelectors";
import { urls } from "../routes";
import { connect } from "react-redux";
import NavLink from "./NavLink";
import * as authOperations from "../redux/auth/authOperations";
import Spinner from "./Spinner";
function Navbar({ isAuthenticated, logout, user, isLoading }) {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Box mr="auto">
            <Typography variant="button" component="div">
              <NavLink to={urls.home}>Home</NavLink>
              {isAuthenticated && (
                <NavLink to={urls.contacts}>Contacts</NavLink>
              )}
              {!isAuthenticated && (
                <>
                  <NavLink to={urls.register}>Register</NavLink>
                  <NavLink to={urls.login}>Login</NavLink>
                </>
              )}
            </Typography>
          </Box>
          {isAuthenticated && (
            <Box>
              <Typography variant="body1" component="span">
                Logged in as {user.name}
              </Typography>
              <Button variant="text" color="inherit" onClick={logout}>
                Logout
              </Button>
            </Box>
          )}
          <Spinner loading={isLoading} />
        </Toolbar>
      </AppBar>

      <Toolbar />
    </div>
  );
}

const mapDispatchToProps = {
  logout: authOperations.logout,
};

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
  user: authSelectors.getUser(state),
  isLoading: authSelectors.getLoading(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
