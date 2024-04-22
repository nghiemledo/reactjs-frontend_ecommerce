import React, { useState } from "react";
import { Helmet } from "react-helmet";
import LoginImg from "../../assets/images/signin-image.jpg";
import BaseAPI, { endpoints } from "../../api/BaseAPI";
import cookies from "react-cookies";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChange = () => {
    setError("");
  };

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError("Please enter both username and password");
      return;
    }
    let response;
    try {
      response = await BaseAPI.post(endpoints["login"], {
        username: username,
        password: password,
      });

      let accessToken = response.data.access;
      cookies.save("access", accessToken);

      let user = await BaseAPI.get(endpoints["current_user"], {
        headers: {
          Authorization: `Bearer ${cookies.load("access")}`,
        },
      });

      cookies.save("user", user.data);
      navigate("/");
      window.location.reload();
    } catch (error) {
      if (error.response.status === 401) {
        setError("Invalid username or password");
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };

  // const user = cookies.load("");
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
            <a href="/register" className="signup-image-link">
              Create an account
            </a>
          </div>
          <div className="signin-form">
            <h2 className="form-title fw-bold">Log in</h2>
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
                  value="Log in"
                  onClick={handleLogin}
                />
              </div>
            </form>
            <div className="social-login">
              <span className="social-label fs-6">Or login with</span>
              <ul className="socials">
                <li>
                  <a href="#">
                    <i className="display-flex-center zmdi zmdi-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="display-flex-center zmdi zmdi-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="display-flex-center zmdi zmdi-google" />
                  </a>
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
