import React, { useState } from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import LoginImg from "../../assets/images/signin-image.jpg";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../states/AppContext";

const Login = () => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    error,
    setError,
    handleChange,
    handleLogin,
  } = useContext(AppContext);

  const navigate = useNavigate();

  return (
    <section className="sign-in">
      <Helmet>
        <title>Login | LuxChronos</title>
      </Helmet>
      <div className="container">
        <div className="signin-content">
          <div className="signin-image">
            <figure>
              <img src={LoginImg} alt="sing up image" />
            </figure>
            <Link to="/register/" className="signup-image-link">
              Create an account
            </Link>
          </div>
          <div className="signin-form">
            <h2 className="form-title fw-bold">Sign in</h2>
            <form className="register-form" id="login-form">
              <div className="form-group">
                <label htmlFor="your_name">
                  <i className="zmdi zmdi-account material-icons-name" />
                </label>
                <input
                  type="text"
                  name="your_name"
                  id="your_name"
                  placeholder="Your Name"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    handleChange();
                  }}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="your_pass">
                  <i className="zmdi zmdi-lock" />
                </label>
                <input
                  type="password"
                  name="your_pass"
                  id="your_pass"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    handleChange();
                  }}
                  required
                />
              </div>
              {error && (
                <div className="error-message mb-3">
                  <i className="zmdi zmdi-alert-circle" /> {error}
                </div>
              )}
              <div className="form-group">
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="agree-term"
                />
                <label htmlFor="remember-me" className="label-agree-term">
                  <span>
                    <span />
                  </span>
                  Remember me
                </label>
              </div>
              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signin"
                  id="signin"
                  className="form-submit"
                  value="Sign in"
                  onClick={(event) => handleLogin(event)}
                />
              </div>
            </form>
            <div className="social-login">
              <span className="social-label fs-6">Or Sign in with</span>
              <ul className="socials">
                <li>
                  <Link to="#">
                    <i className="display-flex-center zmdi zmdi-facebook" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="display-flex-center zmdi zmdi-twitter" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="display-flex-center zmdi zmdi-google" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
