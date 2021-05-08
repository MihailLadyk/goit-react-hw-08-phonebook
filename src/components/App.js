import { Component, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import * as authOperations from "../redux/auth/authOperations";
import { routes } from "../routes";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import Spinner from "./Spinner";
import PrivateRoute from "./routing/PrivateRoute";
import PublicRoute from './routing/PublicRoute'

class App extends Component {
  componentDidMount() {
    this.props.fetchUserData();
  }

  render() {
    return (
      <div>
        <Navbar />

        <Suspense fallback={<Spinner page loading />}>
          <Switch>
            {routes.map((route) =>
              route.private ? (
                <PrivateRoute key={route.path} {...route} />
              ) : (
                <PublicRoute key={route.path} {...route} />
              )
            )}
          </Switch>
        </Suspense>
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchUserData: authOperations.fetchUserData,
};

export default connect(null, mapDispatchToProps)(App);
