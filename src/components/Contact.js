import React, { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName) {
      toast("First Name and Last Name are required.", {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        style: {
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "1rem",
        },
      });
      return;
    }

    if (!formData.phoneNumber) {
      toast("Phone number is required.", {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        style: {
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "1rem",
        },
      });
      return;
    }

    if (!/^[\d]+$/.test(formData.phoneNumber)) {
      toast("Enter a valid Phone Number", {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        style: {
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "1rem",
        },
      });
      return;
    }

    if (!formData.email) {
      toast("Email is required.", {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        style: {
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "1rem",
        },
      });
      return;
    }

    if (!formData.message) {
      toast("Message cannot be empty.", {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        style: {
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "1rem",
        },
      });
      return;
    }

    toast("Thanks for contacting us.", {
      position: "bottom-left",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      style: {
        backgroundColor: "#1b1755",
        color: "#fff",
        borderRadius: "1rem",
      },
    });

    const firebasertdbURL =
      "https://portfolio-53cab-default-rtdb.firebaseio.com/";

    axios
      .post(`${firebasertdbURL}/ContactInfo.json`, formData)
      .then(() => {
        // Reset form fields
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => console.log("The Error is:", error));
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className={styles.contactFormContainer}>
        <span className={styles.touchHeading}>Let's get in touch!</span>
        <form onSubmit={submitHandler}>
          <div className={styles.inputGroup}>
            <input
              placeholder="First Name"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={changeHandler}
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              placeholder="Last Name"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={changeHandler}
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              placeholder="Phone"
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={changeHandler}
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              placeholder="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={changeHandler}
            />
          </div>
          <div className={styles.inputGroup}>
            <textarea
              placeholder="Type your message here"
              name="message"
              rows="5"
              value={formData.message}
              onChange={changeHandler}
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
