import React, { useState } from "react";
import SignupImg from "../../assets/images/signup-image.jpg";
import { Helmet } from "react-helmet";
import BaseAPI, { endpoints } from "../../api/BaseAPI";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = () => {
    setError("");
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    if (!username.trim() || !password.trim() || !email.trim()) {
      setError("Please enter full fields !");
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,25})/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be 8-25 characters long, contain at least one uppercase letter, and one special character."
      );
      return;
    }

    let response;
    try {
      response = await BaseAPI.post(endpoints["register"], {
        username: username,
        email: email,
        password: password,
      });
      console.log(response);
      navigate("/login");
    } catch (error) {
      if (error.response.status === 401) {
        setError("Invalid username or password");
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <section className="signup">
      <Helmet>
        <title>Register | LuxChronos</title>
      </Helmet>
      <div className="container">
        <div className="signup-content">
          <div className="signup-form">
            <h2 className="form-title fw-bold">Register</h2>
            <form method="POST" className="register-form" id="register-form">
              <div className="form-group">
                <label htmlFor="name">
                  <i className="zmdi zmdi-account material-icons-name" />
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  required
                  onChange={(e) => {
                    setUsername(e.target.value);
                    handleChange();
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <i className="zmdi zmdi-email" />
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                    handleChange();
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="pass">
                  <i className="zmdi zmdi-lock" />
                </label>
                <input
                  type="password"
                  name="pass"
                  id="pass"
                  placeholder="Password"
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                    handleChange();
                  }}
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
                  name="agree-term"
                  id="agree-term"
                  className="agree-term"
                />
                <label htmlFor="agree-term" className="label-agree-term">
                  <span>
                    <span />
                  </span>
                  I agree all statements in{" "}
                  <a href="#" className="term-service">
                    Terms of service
                  </a>
                </label>
              </div>
              <div className="form-group form-button" onClick={handleRegister}>
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="form-submit"
                  value="Register"
                />
              </div>
            </form>
          </div>
          <div className="signup-image">
            <figure>
              <img src={SignupImg} alt="sing up image" />
            </figure>
            <a href="/login" className="signup-image-link">
              I am already member
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
