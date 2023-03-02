import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState(" ");
  const [pass, setPass] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="anna@gmail.com"
          id="email"
          name="email"
        />

        <label htmlFor="password">password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          id="password"
          name="password"
        />
        <button onClick={props.onFormSwitch}>LOG IN</button>
      </form>
    </div>
  );
};
