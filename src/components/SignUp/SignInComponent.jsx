import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { Link } from "react-router-dom";
import "./SignInComponentStyles.scss";

function SignInComponent({ handleCreateAccount }) {
  const [state, setState] = useState({ email: "", password: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="sign-in-page">
      <h1 className="page-link">
        <Link to="/" className="LinkStyling">
          <span className="navigate-link">Home </span>
        </Link>
        / Sign in
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
          <form onSubmit={handleSubmit}>
            <FormInput
              type="email"
              name="email"
              label="Email"
              onChange={handleChange}
              value={state.email}
              required
            />

            <FormInput
              type="password"
              name="password"
              label="Password"
              value={state.password}
              onChange={handleChange}
              required
            />
            <CustomButton type="submit" className="sign-btn">
              Log In
            </CustomButton>
            <p className="sign-in-option"> or </p>
            <CustomButton
              onClick={signInWithGoogle}
              type="button"
              className="sign-btn"
              isGoogleSignIn
            >
              Log in with Google
            </CustomButton>
          </form>

          <h2 className="header-tertiary">
            Don't have an account?{" "}
            <span className="account-link" onClick={handleCreateAccount}>
              Create account
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SignInComponent;
