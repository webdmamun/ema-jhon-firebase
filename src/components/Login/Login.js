import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import "./Login.css";
import useAuth from "./../../hooks/useAuth";

const Login = () => {
  const { sgininUsingGoogle } = useAuth();
  const location = useLocation();
  const histroy = useHistory();
  const redirect_uri = location.state?.form || "/";

  const handleGoogleLogin = () => {
    sgininUsingGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        histroy.push(redirect_uri);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
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
        <button className="btn-regular" onClick={handleGoogleLogin}>
          Google Sgin In
        </button>
      </div>
    </div>
  );
};

export default Login;
