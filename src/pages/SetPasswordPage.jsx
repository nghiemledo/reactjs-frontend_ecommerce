import React, { useContext, useState } from "react";
import { AppContext } from "../states/AppContext";
import { EditProfileAPI, endpoints } from "../api/BaseAPI";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const SetPasswordPage = () => {
  const { error, setError, handleChange, handleLogout } =
    useContext(AppContext);
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleChangePassword = async (e) => {
    e.preventDefault();
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,25})/;
    if (
      !passwordRegex.test(currentPassword) &&
      !passwordRegex.test(newPassword)
    ) {
      setError(
        "Password must be 8-25 characters long, contain at least one uppercase letter, and one special character."
      );
      return;
    }
    let response;
    try {
      response = await EditProfileAPI.post(endpoints["user_set_password"], {
        new_password: newPassword,
        current_password: currentPassword,
      });
      alert("Change password successfully, please sign in again");
      handleLogout();
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mt-5" style={{ marginBottom: "175px" }}>
      <Helmet>
        <title>LuxChronos | Set password</title>
      </Helmet>
      <div className="main-content">
        <h3 style={{ textAlign: "center" }} className="fw-bold mb-3">Change password</h3>
        <div className="form-group">
          <label htmlFor="currentpassword">
            <i className="zmdi zmdi-key" />
          </label>
          <input
            type="password"
            name="currentpassword"
            id="currentpassword"
            placeholder="Current password"
            value={currentPassword}
            onChange={(e) => {
              setCurrentPassword(e.target.value);
              handleChange();
            }}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="newpassword">
            <i className="zmdi zmdi-lock" />
          </label>
          <input
            type="password"
            name="newpassword"
            id="newpassword"
            placeholder="New password"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
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
        <div className="form-group form-button">
          <input
            type="submit"
            name="signin"
            id="signin"
            className="form-submit"
            value="Change password"
            onClick={(e) => handleChangePassword(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default SetPasswordPage;
