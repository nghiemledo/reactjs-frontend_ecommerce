import React, { useState } from "react";
import "../assets/css/userprofile.css";
import userIcon from "../assets/images/user_456212.png";
import cookies from "react-cookies";
import { Helmet } from "react-helmet";
import { EditProfileAPI, endpoints } from "../api/BaseAPI";
import BaseAPI from "../api/BaseAPI";

const UserProfilePage = () => {
  const initialUserData = cookies.load("user").data;
  const accessToken = cookies.load("access");

  const [userData, setUserData] = useState(initialUserData);
  const [formValues, setFormValues] = useState({
    firstName: initialUserData.first_name || "",
    lastName: initialUserData.last_name || "",
    email: initialUserData.email || "",
    phone: initialUserData.phone || "",
    address: initialUserData.address || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleUpdateUser = () => {
    const userId = userData.id;
    const userName = userData.username;
    const passWord = userData.password;

    const { firstName, lastName, email, phone, address } = formValues;

    const updatedUserData = {
      ...userData,
      username: userName,
      passWord: passWord,
      email: email,
      first_name: firstName,
      last_name: lastName,
      phone: phone,
      address: address,
    };

    EditProfileAPI.put(endpoints["user"], updatedUserData)
      .then((response) => {
        setUserData(response.data);
        console.log("User updated successfully!", response.data);
      })
      .catch((error) => {
        alert("Update failed ! Please try again");
        console.error("Error updating user:", error);
      });
  };

  return (
    <div className="container mt-5 mb-5 user-profiles">
      <Helmet>
        <title>LuxChronos | User profile</title>
      </Helmet>
      <div className="row gutters">
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
          <div className="card h-100">
            <div className="card-body">
              <div className="account-settings">
                <div className="user-profile">
                  <div className="user-avatar">
                    <img src={userIcon} alt="User Avatar" />
                  </div>
                  <h5 className="user-name">{userData.username}</h5>
                  <h6 className="user-email">{userData.email}</h6>
                </div>
                <div className="about">
                  <h5>About</h5>
                  <p>Customize your personal profile here.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
          <div className="card h-100">
            <div className="card-body">
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h6 className="mb-2 text-primary">Personal Details</h6>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      name="firstName"
                      value={formValues.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter first name"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="website" className="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastname"
                      name="lastName"
                      value={formValues.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter last name"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="eMail" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="eMail"
                      name="email"
                      value={formValues.email}
                      onChange={handleInputChange}
                      placeholder="Enter email"
                      required
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={formValues.phone}
                      onChange={handleInputChange}
                      placeholder="Enter phone"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h6 className="mt-3 mb-2 text-primary">Address</h6>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      name="address"
                      value={formValues.address}
                      onChange={handleInputChange}
                      placeholder="Enter address"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="text-end">
                    <button
                      type="button"
                      id="cancel"
                      name="cancel"
                      className="btn btn-secondary me-2"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      id="update"
                      name="update"
                      className="btn btn-primary"
                      onClick={() => handleUpdateUser()}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
