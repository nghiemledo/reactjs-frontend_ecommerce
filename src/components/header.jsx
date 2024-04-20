import React from "react";
import logoLuxChoronos from "../assets/images/luxury-shop.png";
import cookies from "react-cookies";

const Header = () => {
  let user = cookies.load("user");
  let Authentication = (
    <>
      <li className="nav-item">
        <a className="nav-link" href="/login">
          Login
        </a>
      </li>
    </>
  );

  if (user != null) {
    Authentication = (
      <li className="nav-item">
        <a className="nav-link" href="/">
          {user.username}
        </a>
      </li>
    );
  }
  return (
    <header className="header_section">
      <div
        className="container-fluid "
        style={{ position: "fixed", backgroundColor: "#b5caee", zIndex: "5" }}
      >
        <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
          <a className="navbar-brand" href="/">
            <img src={logoLuxChoronos} />
            <span>LuxChronos</span>
          </a>
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
                  <a className="nav-link" href="/#about">
                    About <span className="sr-only"></span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blog <span className="sr-only"></span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/category">
                    {" "}
                    Our watches{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Cart
                  </a>
                </li>
                {Authentication}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
