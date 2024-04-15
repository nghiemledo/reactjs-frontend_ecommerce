import React from "react";

const Header = () => {
  return (
    <header className="header_section">
      <div className="container-fluid ">
        <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
          <a className="navbar-brand" href="#">
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
                  <a className="nav-link" href="index.html">
                    Home <span className="sr-only"></span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">
                    {" "}
                    About{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="watch.html">
                    {" "}
                    Our Watches{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact us
                  </a>
                </li>
                <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                  <button
                    className="btn  my-2 my-sm-0 nav_search-btn"
                    type="submit"
                  />
                </form>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
