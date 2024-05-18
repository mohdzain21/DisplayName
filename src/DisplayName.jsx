import React, { useState } from 'react';
import './DisplayName.css';

function NameForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = () => {
    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div className="container">
      <label htmlFor="first-name">First Name:</label>
      <input
        type="text"
        id="first-name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <label htmlFor="last-name">Last Name:</label>
      <input
        type="text"
        id="last-name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>

      {fullName && <div id="result">Full Name: {fullName}</div>}
    </div>
  );
}

export default NameForm;
