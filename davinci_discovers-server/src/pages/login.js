import React, { useState } from "react";
import "./style.css";
// Code source for log in structure and validations: https://contactmentor.com/login-form-react-js-code/

function LogIn() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const UsersDatabase = [
    {
      username: "itsJess",
      password: "PolkaDots13"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "Invalid Username!",
    pass: "Invalid Password!"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = UsersDatabase.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div id="form_body" class="animate form">
      <form onSubmit={handleSubmit}>
        <div className="inputbox">
          <input type="text" name="uname" placeholder="Username" required />
          <p className="error">{renderErrorMessage("uname")}</p>
        </div>
        <br></br>
        <div className="inputbox">
          <input type="password" name="pass" placeholder="Password" required />
          <p className="error"> {renderErrorMessage("pass")}</p>
        </div>
        <br></br>
        <div className="button">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        {isSubmitted ? <div><h1>User is successfully logged in!</h1></div> : renderForm}
      </div>
    </div>
  );
}


export default LogIn;
