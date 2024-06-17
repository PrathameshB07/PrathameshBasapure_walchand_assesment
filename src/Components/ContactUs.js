import React, { useState } from 'react';
import contactusStyles from '../Styles/contactus.module.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
        alert('Form Submitted')
      console.log('Form submitted:', formData);
      window.location.reload();
    }
  };

  return (
    <section id='contact-us' className={contactusStyles.contactSection}>
      <h2 className={contactusStyles.contactHeading}>Contact Us</h2>
      <form className={contactusStyles.contactForm} onSubmit={handleSubmit}>
        <div className={contactusStyles.formGroup}>
          <label htmlFor="name" className={contactusStyles.formLabel}>
            Name
          </label>
          <input
            type="text"
            id="name"
            className={contactusStyles.formInput}
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
          {formErrors.name && <div className={contactusStyles.formError}>{formErrors.name}</div>}
        </div>
        <div className={contactusStyles.formGroup}>
          <label htmlFor="email" className={contactusStyles.formLabel}>
            Email
          </label>
          <input
            type="email"
            id="email"
            className={contactusStyles.formInput}
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && <div className={contactusStyles.formError}>{formErrors.email}</div>}
        </div>
        <div className={contactusStyles.formGroup}>
          <label htmlFor="message" className={contactusStyles.formLabel}>
            Message
          </label>
          <textarea
            id="message"
            className={contactusStyles.formTextarea}
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {formErrors.message && <div className={contactusStyles.formError}>{formErrors.message}</div>}
        </div>
        <button type="submit" className={contactusStyles.formButton}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
