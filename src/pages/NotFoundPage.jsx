import React from "react";
import "../assets/css/notfound.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <Helmet>
        <title>404-Not found | LuxChronos</title>
      </Helmet>
      <h1>UH OH! You're lost.</h1>
      <p className="zoom-area" style={{ textAlign: "center" }}>
        The page you are looking for does not exist. How you got here is a
        mystery. But you can click the button below to go back to the homepage.
      </p>
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="link-container">
        <Link
          //   target="_blank"
          to="/"
          className="more-link"
          style={{ borderRadius: "20px" }}
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
