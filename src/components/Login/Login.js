import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-form">
      <div>
        <h2>Log in</h2>
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
          <input type="submit" value="submit" />
        </form>
        <p>
          New to Ema Jhon <Link to="/register">Create Account</Link>{" "}
        </p>
        <div>-------------or---------------</div>
        <button className="btn-regular">Google Sgin In</button>
      </div>
    </div>
  );
};

export default Login;
