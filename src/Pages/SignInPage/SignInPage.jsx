import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignInComponent from "../../components/SignUp/SignInComponent";
import SignUpComponent from "../../components/SignUp/SignUpComponent";
import { selectCurrentUser } from "../../redux/user/userSelector";
import { createStructuredSelector } from "reselect";

function SignInPage({ currentUser }) {
  const [hide, setHide] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    if (currentUser && currentUser.uid) {
      return navigate("/myaccount");
    }
  }, [currentUser, navigate]);

  return hide ? (
    <SignInComponent handleCreateAccount={() => setHide(false)} />
  ) : (
    <SignUpComponent handleSignIn={() => setHide(true)} />
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(SignInPage);
