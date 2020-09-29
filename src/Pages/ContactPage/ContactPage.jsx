import React, { Component } from "react";
import FormInput from "../../components/FormInput/FormInput";
import { auth } from "../../firebase/firebase.utils.js";
import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButton/CustomButton";
import "../../sass/app.scss";

class ContactPage extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      phoneNumber: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };
  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="contact-page">
        <h1 className="page-link">
          <Link to="/" className="LinkStyling">
            <span className="navigate-link">Home </span>
          </Link>
          / Contacts
        </h1>
        <h1 className="header-medium center">Contact Us</h1>
        <h2 className="header-small center">Need Help?</h2>
        <p className="text-details-center">
          If you have any question about our company, products or your order,
          feel free to contact us by email, phone or by filling out the
          following form. We'll get back to you as soon as possible.{" "}
        </p>
        <h2 className="header-small">By email</h2>
        <p className="text-details left">Email us at hello@coruja-store.com</p>
        <h2 className="header-small">By phone</h2>
        <p className="text-details">
          We’re available by phone & chat Monday–Friday, 10 a.m. – 5:30 p.m.
          EST. Call us at +444-0101-000-333
        </p>
        <h2 className="header-small contact-form-header">By contact form</h2>
        <div className="contact-form-wrapper">
          <form>
            <div className="contact-details">
              <FormInput
                type="text"
                name="displayName"
                label="Display Name"
                onChange={this.handleChange}
                value={this.state.displayName}
                required
              />
              <FormInput
                type="email"
                name="email"
                label="Email"
                onChange={this.handleChange}
                value={this.state.email}
                placeholder={this.state.email}
                required
              />
            </div>

            <FormInput
              type="text"
              name="phoneNumber"
              label="Phone Number"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
              placeholder={this.state.phoneNumber}
              required
            />
            <textarea
              name="contact"
              id="ContactFormMessage"
              rows="10"
            ></textarea>
            <CustomButton type="submit" className="btn btn-large">
              Send
            </CustomButton>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactPage;
