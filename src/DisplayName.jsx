import React, { useState } from 'react';

function NameForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (firstName.trim() !== '' && lastName.trim() !== '') {
            const fullName = `${firstName} ${lastName}`;
            setFullName(fullName);
        } else {
            setFullName('');
        }
    };

    return (
        <div id="form-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>
            {fullName && (
                <div id="fullname">
                    <strong>Full Name: {fullName}</strong>
                </div>
            )}
        </div>
    );
}

export default NameForm;
