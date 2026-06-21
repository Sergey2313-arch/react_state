import { useState } from 'react';

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');

  return (
    <div className="block">
      <h1>Form</h1>

      <div className="form-row">
        <input
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />

        <input
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />

        <input
          type="number"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
      </div>

      {(firstName || lastName || age) && (
        <p>
          {firstName} {lastName} {age}
        </p>
      )}
    </div>
  );
}

export default Form;
