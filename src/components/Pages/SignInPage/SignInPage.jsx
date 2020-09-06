import React, { Component } from "react";
import FormInput from "../../FormInput/FormInput";
import CustomButton from "../../CustomButton/CustomButton";
import "./SignInPageStyles.scss";


class SignInPage extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in-page">
        <h1 className="page-link">
          <span className="navigate-link">Home </span>/ Sign In
        </h1>
        <div className="sign-in-wrapper">
          <div className="sign-in-img-box" />
          <div className="sign-in-details">
            <h1 className="header-medium">Login</h1>
            <span className="text-details">
              Shopping with us is easy - all of your personal info and order
              history is saved here for you to reference and manage whenever you
              need to
            </span>
            <form onSubmit={this.handleSubmit}>
              <FormInput
                type="email"
                name="email"
                label="Email"
                onChange={this.handleChange}
                value={this.state.email}
                required
              />

              <FormInput
                type="password"
                name="password"
                label="Password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
            </form>
            <CustomButton type="submit" className="sign-btn">
              Sign In
            </CustomButton>
          </div>
        </div>
      </div>
    );
  }
}
export default SignInPage;
