import React, { Component } from "react";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { Link } from "react-router-dom";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./SignUpComponentStyles.scss";

class SignUpComponent extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, password, email, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h1 className="page-link">
          <span className="navigate-link">Home </span>/ Account
        </h1>
        <div className="sign-in-wrapper">
          <div className="sign-in-img-box" />
          <div className="sign-in-details">
            <h1 className="header-medium">CREATE ACCOUNT</h1>
            <span className="text-details">
              Shopping with us is easy - all of your personal info and order
              history is saved here for you to reference and manage whenever you
              need to
            </span>
            <form onSubmit={this.handleSubmit}>
              <FormInput
                type="text"
                name="displayName"
                label="Display Name"
                onChange={this.handleChange}
                value={displayName}
                required
              />

              <FormInput
                type="email"
                name="email"
                label="Email"
                onChange={this.handleChange}
                value={email}
                required
              />

              <FormInput
                type="password"
                name="password"
                label="Password"
                value={password}
                onChange={this.handleChange}
                required
              />
              <FormInput
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                value={confirmPassword}
                onChange={this.handleChange}
                required
              />
              <CustomButton type="submit" className="sign-btn">
                Sign In
              </CustomButton>
            </form>

            <h2 className="header-tertiary">
              Already have an account?
              <Link to="/signin" className="account-link">
                &nbsp; Sign In
              </Link>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpComponent;
