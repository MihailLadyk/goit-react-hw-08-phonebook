import { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import { connect } from "react-redux";
import * as authOperations from "../../redux/auth/authOperations";
const initialState = {
  name: "",
  email: "",
  password: "",
};

class RegisterForm extends Component {
  state = {
    ...initialState,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.register(this.state);

    this.setState({
      ...initialState,
    });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Name"
            type="text"
            name="name"
            placeholder="Name"
            required
            value={name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="E-Mail"
            type="email"
            name="email"
            placeholder="E-Mail"
            required
            value={email}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Password"
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={this.handleChange}
          />
        </div>

        <Button type="submit" variant="contained" color="primary">
          Register
          {/* <Spinner loading={loading} /> */}
        </Button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  register: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterForm);
