import React, { useState } from "react";
import "./App.css";
import { Login } from "./Login";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <div className="page">
          <div> You are logged in! </div>
          <button onClick={() => setCurrentForm("login")}>Log out</button>
        </div>
      )}
    </div>
  );
}

export default App;
