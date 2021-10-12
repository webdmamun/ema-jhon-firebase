import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-form">
      <div>
        <h2>Register: Create Account</h2>
        <form onSubmit="">
          <input type="email" name="" id="" placeholder="Your Email Address" />
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="Enter your Password"
          />
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="Re-Enter your Password"
          />
          <br />
          <input type="submit" value="submit" />
        </form>
        <p>
          Already have an account <Link to="/login">Log in</Link>
        </p>
        <div>-------------or---------------</div>
        <button className="btn-regular">Google Sgin In</button>
      </div>
    </div>
  );
};

export default Register;
