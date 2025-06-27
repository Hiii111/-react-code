import React from 'react';

export default function UncontrolledComponent() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Stop page reload

    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

      document.getElementById("output").innerText = `Username: ${username} | Password: ${password}`;
  };

  return (
    <div>
      <h1>UnControlled Component</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter Username"
        />
        <br /><br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>

      <h1 id='output'></h1>
    </div>
  );
}

