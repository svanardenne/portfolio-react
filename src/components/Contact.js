import React, { Component } from "react";
import axios from "axios";

// Import API configuration
import apiURL from "../mailAPIconfig";

class Contact extends Component {
  // Calls fade fucntion from context
  componentDidMount() {
    this.props.context.fade();
  }

  // Sets state for controlled inputs
  state = {
    submitState: "Submit",
    submitMessage: "",
    errors: false,
    name: "",
    email: "",
    message: "",
  };

  // Handles value change in input fields
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  // Handles the submission of form data to mail API
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };
    if (data.name && data.email && data.message) {
      this.setState({ errors: false });
      this.setState({ submitState: "Sending..." });
      axios.post(apiURL, data).then((res) => {
        if (res.data.status === "success") {
          this.setState({ submitState: "Submit" });
          this.setState({ submitMessage: "Message sent." });
          this.setState({ name: "", email: "", subject: "", message: "" });
        } else if (res.data.status === "fail") {
          this.setState({ submitState: "Submit" });
          this.setState({ submitMessage: "Message failed to send." });
        }
      });
    } else {
      this.setState({ errors: true });
    }
  };

  render() {
    return (
      <section id="contact" className="main-content contact-wrapper fades">
        <h2 className="contact-title">Contact</h2>
        <div className="form-wrapper">
          <form onSubmit={this.handleSubmit} className="contact-form">
            <input
              onChange={this.handleChange}
              value={this.state.name}
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              onChange={this.handleChange}
              value={this.state.email}
              type="email"
              name="email"
              placeholder="Enter Email"
            />
            <textarea
              onChange={this.handleChange}
              value={this.state.message}
              type="text"
              name="message"
              placeholder="Your Message"
            />
            <button type="submit" className="button form-button">
              {this.state.submitState}
            </button>

            {this.state.errors === true ? (
              <span className="form-error">Please fill out all fields</span>
            ) : null}
          </form>
        </div>

        {this.state.submitMessage !== "" ? (
          <div className="modal-wrapper">
            <div className="contact-modal">
              <div className="message-status">
                <span>{this.state.submitMessage}</span>
                <button
                  onClick={() => this.setState({ submitMessage: "" })}
                  className="button contact-modal-button"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </section>
    );
  }
}

export default Contact;
