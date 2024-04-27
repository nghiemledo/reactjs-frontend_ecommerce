import React, { useContext, useEffect, useState } from "react";
import logoLuxChoronos from "../assets/images/luxury-shop.png";
import cookies from "react-cookies";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../states/AppContext";
import CartPage from "../pages/CartPage";

const Header = () => {
  let user = cookies.load("user");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const {cartItem} = useContext(AppContext)

  const handleLogout = () => {
    cookies.remove("access");
    cookies.remove("user");
    navigate("/login");
  };

  let Authentication = (
    <>
      <Link className="nav-link" to="/login">
        Login
      </Link>
    </>
  );

  if (user != null) {
    Authentication = (
      <div className="action" style={{ cursor: "pointer", marginTop: "2px" }}>
        <a
          className="nav-link dropdown-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i
            className="zmdi zmdi-account-circle"
            style={{ marginRight: "5px", color: "grey" }}
          />
          <strong style={{ color: "grey" }}>{user.data.username}</strong>
        </a>
        <div className={menuOpen ? "menu active" : "menu"}>
          <h3>
            {user.data.username}
            <br />
            <span>{user.data.email}</span>
          </h3>
          <ul>
            <li>
              <i class="zmdi zmdi-account-o mt-0 me-2" />
              <a href="/notfound/">My profile</a>
            </li>
            <li>
              <i class="zmdi zmdi-edit mt-0 me-2" />
              <a href="/notfound/">Edit profile</a>
            </li>
            <li>
              <i class="zmdi zmdi-settings mt-0 me-2" />
              <a href="/notfound/">Setting</a>
            </li>
            <li>
              <i class="zmdi zmdi-help mt-0 me-2" />
              <a href="/notfound/">Help</a>
            </li>
            <li>
              <fa-icon
                _ngcontent-serverapp-c49=""
                className="ng-fa-icon text-gray-500 me-2"
              >
                <svg
                  style={{ width: "15px", height: "15px", marginRight: "6px" }}
                  role="img"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fad"
                  data-icon="arrow-right-from-bracket"
                  className="svg-inline--fa fa-arrow-right-from-bracket fa-fw"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g className="fa-duotone-group">
                    <path
                      className="fa-secondary"
                      fill="currentColor"
                      d="M192 64c0 17.7-14.3 32-32 32L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32z"
                    />
                    <path
                      className="fa-primary"
                      fill="currentColor"
                      d="M502.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L402.7 288 192 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l210.7 0-73.4-73.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l128 128z"
                    />
                  </g>
                </svg>
              </fa-icon>
              <Link to="#" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <header className="header_section">
      <div
        className="container-fluid "
        style={{ position: "fixed", backgroundColor: "#b5caee", zIndex: "5" }}
      >
        <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
          <Link className="navbar-brand"to="/">
            <img src={logoLuxChoronos} alt="LuxChronos Logo" />
            <span>LuxChronos</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav custom_navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/#about">
                    About <span className="sr-only"></span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Blog <span className="sr-only"></span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/category">
                    {" "}
                    Our watches{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/cart'>
                    Cart ({cartItem.length})
                  </Link>
                </li>
                <li className="nav-item">{Authentication}</li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
