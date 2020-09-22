import React from "react";
import SignInComponent from "../../components/SignUp/SignInComponent";
import SignUpComponent from "../../components/SignUp/SignUpComponent";
import { Component } from "react";

class SignInPage extends Component {
  constructor() {
    super();

    this.state = {
      hide: true,
    };
  }

  handleCreateAccount = () => {
    this.setState({ hide: false });
  };
  handleSignIn = () => {
    this.setState({ hide: true });
  };

  render() {
    return (
      <div>
        {this.state.hide ? (
          <SignInComponent handleCreateAccount={this.handleCreateAccount} />
        ) : (
          <SignUpComponent handleSignIn={this.handleSignIn} />
        )}
      </div>
    );
  }
}
export default SignInPage;
