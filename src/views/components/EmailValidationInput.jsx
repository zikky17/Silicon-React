import React, { useState } from 'react';

function EmailForm() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (value) => {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regEx.test(value)) {
      setEmailError('You must enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    validateEmail(value);
  };

  return (
    <div id="form-email" className="input-group">
      <label htmlFor="form-email">Email Address</label>
      <input
        required
        onChange={(e) => handleEmailChange(e)}
        name="email"
        type="email"
        value={email}
        className="form-email"
      />
      <div className="error-message-box">
        <div className="email-error-message">{emailError}</div>
      </div>
    </div>
  );
}

export default EmailForm;