import React, { useState } from 'react';
import './DisplayName.css';

function NameForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="first-name">First Name:</label>
        <input
          type="text"
          id="first-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          data-cy="first-name-input" // Add data-cy attribute for Cypress
        />

        <label htmlFor="last-name">Last Name:</label>
        <input
          type="text"
          id="last-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          data-cy="last-name-input" // Add data-cy attribute for Cypress
        />

        <button type="submit" data-cy="submit-btn">Submit</button> {/* Add data-cy attribute for Cypress */}
      </form>

      {isSubmitted && <div id="result" data-cy="result">Full Name: {fullName}</div>} {/* Add data-cy attribute for Cypress */}
    </div>
  );
}

export default NameForm;
