import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { Link } from "react-router-dom";
import "./SignUpComponentStyles.scss";
import { useAuth } from "../../contexts/AuthContext";

function SignUpComponent({ handleSignIn }) {
  const { signup, currentUser } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
    displayName: "",
    passwordConfirm: "",
  });
  const { email, password, displayName, passwordConfirm } = state;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      alert("passwords don't match");
      return;
    }
    try {
      setError("");
      setLoading(true);
      await signup(email, password, displayName);
    } catch (error) {
      setError("Failed to create an account");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({ ...state, [evt.target.name]: value });
  };

  return (
    <div className="sign-up">
      <h1 className="page-link">
        <Link to="/" className="LinkStyling">
          <span className="navigate-link">Home </span>
        </Link>
        / Register
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
          <h3>{currentUser && currentUser.email}</h3>
          {error && <h4 style={{ color: "red" }}>{error}</h4>}
          <form onSubmit={handleSubmit}>
            <FormInput
              type="text"
              name="displayName"
              label="Display Name"
              value={state.displayName}
              onChange={handleChange}
              required
            />

            <FormInput
              type="email"
              name="email"
              label="Email"
              value={state.email}
              onChange={handleChange}
              required
            />

            <FormInput
              type="password"
              name="password"
              label="Password"
              value={state.password}
              onChange={handleChange}
            />

            <FormInput
              type="password"
              name="passwordConfirm"
              value={state.passwordConfirm}
              label="Confirm Password"
              onChange={handleChange}
              required
            />
            <CustomButton disabled={loading} type="submit" className="sign-btn">
              Log In
            </CustomButton>
          </form>

          <h2 className="header-tertiary">
            Already have an account?
            <span onClick={handleSignIn} className="account-link">
              Log In
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SignUpComponent;
