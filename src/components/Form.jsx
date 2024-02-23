import React from "react";

const Form = () => {
  return (
    <form>
      <span>
        <label htmlFor="username">Email or Username</label>
        <input type="text" name="username" />
      </span>
      <span>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
      </span>
      <button className="sign-btn">Sign in</button>
    </form>
  );
};

export default Form;
