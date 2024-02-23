import Logo from "../assets/login-logo.png";
import Form from "./Form";

const FormSection = () => {
  return (
    <div className="form-section">
      <img src={Logo} alt="" />
      <Form />
      <div className="form-links">
        <a href="#">Forget Password?</a>
        <a href="#">Sign in with company or school</a>
      </div>
      <button className="create-btn">Create an Account</button>
      <div className="about-links">
        <a href="#">
          Copyright © 2004 - 2022 Pluralsight LLC. All rights reserved.
        </a>
        <a href="#">Terms & Use | Privacy Policy</a>
      </div>
    </div>
  );
};

export default FormSection;
