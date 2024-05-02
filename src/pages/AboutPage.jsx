import React from "react";
import "../assets/css/about.css";
import ContactSection from "../components/ContactSection";
import p1 from "../assets/images/portfolio/1.jpg";
import p2 from "../assets/images/portfolio/2.jpg";
import p3 from "../assets/images/portfolio/3.jpg";
import p4 from "../assets/images/portfolio/4.jpg";
import p5 from "../assets/images/portfolio/5.jpg";
import p6 from "../assets/images/portfolio/6.jpg";
import closeIcon from "../assets/images/close-icon.svg";
import about1 from "../assets/images/about/1.jpg";
import about2 from "../assets/images/about/2.jpg";
import about3 from "../assets/images/about/3.jpg";
import about4 from "../assets/images/about/4.jpg";
import founder from "../assets/images/team/founder.jpg";
import coFounder from "../assets/images/team/co-founder.jpg";
import coFounder03 from "../assets/images/team/co-founder03.jpg";
import coFounder04 from "../assets/images/team/co-founder04.jpg";
import microsoftLogo from "../assets/images/logos/microsoft.svg";
import facebookLogo from "../assets/images/logos/facebook.svg";
import ibmLogo from "../assets/images/logos/ibm.svg";
import googleLogo from "../assets/images/logos/google.svg";

const AboutPage = () => {
  return (
    <div>
      <>
        <header className="masthead">
          <div className="container">
            <div className="masthead-subheading">Welcome To LuxChronos!</div>
            <div className="masthead-heading text-uppercase">
              It's Nice To Meet You
            </div>
            <a
              className="btn btn-warning btn-xl text-uppercase text-white"
              href="#services"
            >
              Tell Me More
            </a>
          </div>
        </header>
        {/* Services*/}
        <section className="page-section" id="services">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Services</h2>
              <h3 className="section-subheading text-muted">
                We Offer Solutions That Make Your Business Stand Out.
              </h3>
            </div>
            <div className="row text-center">
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary" />
                  <i className="fas fa-clock fa-stack-1x fa-inverse" />
                </span>
                <h4 className="my-3">Wide Range of Products</h4>
                <p className="text-muted">
                  With a variety of styles and brands, we bring you a collection
                  of beautiful and stylish watches from renowned brands
                  worldwide.
                </p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary" />
                  <i className="fas fa-sync fa-stack-1x fa-inverse" />
                </span>
                <h4 className="my-3">Professional Maintenance</h4>
                <p className="text-muted">
                  Our team of technicians is experienced and highly skilled in
                  maintaining and repairing watches. We are committed to
                  providing you with absolute trust and satisfaction with each
                  use of our services.
                </p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary" />
                  <i className="fas fa-shield-alt fa-stack-1x fa-inverse" />
                </span>
                <h4 className="my-3">Quality and Safety</h4>
                <p className="text-muted">
                  We pledge to only offer high-quality and reliable watches,
                  ensuring safety and ease of use for customers.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Portfolio Grid*/}
        <section className="page-section bg-light" id="portfolio">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Portfolio</h2>
              <h3 className="section-subheading text-muted">
                Explore our featured projects below.
              </h3>
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-6 mb-4">
                {/* Portfolio item 1*/}
                <div className="portfolio-item">
                  <a
                    className="portfolio-link"
                    data-bs-toggle="modal"
                    href="#portfolioModal1"
                  >
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content">
                        <i className="fas fa-plus fa-3x" />
                      </div>
                    </div>
                    <img className="img-fluid" src={p1} alt="..." />
                  </a>
                  <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">Threads</div>
                    <div className="portfolio-caption-subheading text-muted">
                      Illustration
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-4">
                {/* Portfolio item 2*/}
                <div className="portfolio-item">
                  <a
                    className="portfolio-link"
                    data-bs-toggle="modal"
                    href="#portfolioModal2"
                  >
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content">
                        <i className="fas fa-plus fa-3x" />
                      </div>
                    </div>
                    <img className="img-fluid" src={p2} alt="..." />
                  </a>
                  <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">Explore</div>
                    <div className="portfolio-caption-subheading text-muted">
                      Graphic Design
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-4">
                {/* Portfolio item 3*/}
                <div className="portfolio-item">
                  <a
                    className="portfolio-link"
                    data-bs-toggle="modal"
                    href="#portfolioModal3"
                  >
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content">
                        <i className="fas fa-plus fa-3x" />
                      </div>
                    </div>
                    <img className="img-fluid" src={p3} alt="..." />
                  </a>
                  <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">Finish</div>
                    <div className="portfolio-caption-subheading text-muted">
                      Identity
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                {/* Portfolio item 4*/}
                <div className="portfolio-item">
                  <a
                    className="portfolio-link"
                    data-bs-toggle="modal"
                    href="#portfolioModal4"
                  >
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content">
                        <i className="fas fa-plus fa-3x" />
                      </div>
                    </div>
                    <img className="img-fluid" src={p4} alt="..." />
                  </a>
                  <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">Lines</div>
                    <div className="portfolio-caption-subheading text-muted">
                      Branding
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                {/* Portfolio item 5*/}
                <div className="portfolio-item">
                  <a
                    className="portfolio-link"
                    data-bs-toggle="modal"
                    href="#portfolioModal5"
                  >
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content">
                        <i className="fas fa-plus fa-3x" />
                      </div>
                    </div>
                    <img className="img-fluid" src={p5} alt="..." />
                  </a>
                  <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">Southwest</div>
                    <div className="portfolio-caption-subheading text-muted">
                      Website Design
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                {/* Portfolio item 6*/}
                <div className="portfolio-item">
                  <a
                    className="portfolio-link"
                    data-bs-toggle="modal"
                    href="#portfolioModal6"
                  >
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content">
                        <i className="fas fa-plus fa-3x" />
                      </div>
                    </div>
                    <img className="img-fluid" src={p6} alt="..." />
                  </a>
                  <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">Window</div>
                    <div className="portfolio-caption-subheading text-muted">
                      Photography
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About*/}
        <section className="page-section" id="about">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">About Us</h2>
              <h3 className="section-subheading text-muted">
                Get to Know Our Journey and Vision.
              </h3>
            </div>
            <ul className="timeline">
              <li>
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src={about1}
                    alt="..."
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>2022-2023</h4>
                    <h4 className="subheading">Our Founding Story</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      LuxChronos began with a passion for timepieces. Our
                      journey started with a small collection of watches and a
                      vision to provide exquisite timepieces to enthusiasts
                      around the globe.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src={about2}
                    alt="..."
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>March 2023</h4>
                    <h4 className="subheading">Establishing Our Identity</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      In March 2011, LuxChronos officially became an established
                      brand in the watch industry. With a focus on quality and
                      craftsmanship, we embarked on a journey to redefine the
                      standards of luxury timepieces.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src={about3}
                    alt="..."
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>December 2023</h4>
                    <h4 className="subheading">Transition to Full Service</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      In December 2015, LuxChronos made a significant shift by
                      transitioning to a full-service model. This strategic move
                      allowed us to expand our offerings and provide
                      comprehensive solutions to our customers. We enhanced our
                      services to include repairs, maintenance, and
                      customization, ensuring that every watch enthusiast
                      receives personalized attention and impeccable service.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src={about4}
                    alt="..."
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>January 2024</h4>
                    <h4 className="subheading">Phase Two Expansion</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      In January 2024, LuxChronos embarked on the second phase
                      of expansion to further elevate our brand and reach. This
                      expansion focused on strengthening our online presence,
                      enhancing our digital platforms, and extending our global
                      footprint. Through strategic partnerships and innovative
                      marketing initiatives, we aimed to connect with a broader
                      audience and reinforce our commitment to delivering
                      excellence in watchmaking and customer service.
                    </p>
                  </div>
                </div>
              </li>
              {/* Final timeline item */}
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4>
                    Be Part
                    <br />
                    Of Our
                    <br />
                    Journey!
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Team*/}
        <section className="page-section bg-light" id="team">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Meet Our Team</h2>
              <h3 className="section-subheading text-muted">
                Get to Know the Faces Behind LuxChronos.
              </h3>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    style={{ height: "250px" }}

                    src={coFounder}
                    alt="Parveen Anand"
                  />
                  <h4>Nguyen Thi Van Anh</h4>
                  <p className="text-muted">Lead Watch Designer</p>
                  <div className="social-icons">
                    <a className="btn btn-dark btn-social mx-2" href="#!">
                      <i className="fab fa-twitter" />
                    </a>
                    <a className="btn btn-dark btn-social mx-2" href="#!">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a className="btn btn-dark btn-social mx-2" href="#!">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    style={{ height: "250px" }}
                    src={coFounder03}
                    alt="Le Do Nghiem"
                  />
                  <h4>Le Do Nghiem</h4>
                  <p className="text-muted">CEO and Founder</p>
                  <div className="social-icons">
                    <a className="btn btn-dark btn-social mx-2" href="#!">
                      <i className="fab fa-twitter" />
                    </a>
                    <a className="btn btn-dark btn-social mx-2" href="#!">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a className="btn btn-dark btn-social mx-2" href="#!">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src={coFounder04}
                    style={{ height: "250px" }}
                    alt="Kim Kien Dao"
                  />
                  <h4>Kim Kien Dao</h4>
                  <p className="text-muted">Lead Developer</p>
                  <div className="social-icons">
                    <a className="btn btn-dark btn-social mx-2" href="#!">
                      <i className="fab fa-twitter" />
                    </a>
                    <a className="btn btn-dark btn-social mx-2" href="#!">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a className="btn btn-dark btn-social mx-2" href="#!">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <p className="large text-muted">
                  Our team consists of dedicated professionals who are
                  passionate about creating exceptional timepieces and providing
                  unparalleled service to our customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Clients*/}
        <div className="py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-3 col-sm-6 my-3">
                <a href="#!">
                  <img
                    className="img-fluid img-brand d-block mx-auto"
                    src={microsoftLogo}
                    alt="..."
                  />
                </a>
              </div>
              <div className="col-md-3 col-sm-6 my-3">
                <a href="#!">
                  <img
                    className="img-fluid img-brand d-block mx-auto"
                    src={googleLogo}
                    alt="..."
                  />
                </a>
              </div>
              <div className="col-md-3 col-sm-6 my-3">
                <a href="#!">
                  <img
                    className="img-fluid img-brand d-block mx-auto"
                    src={facebookLogo}
                    alt="..."
                  />
                </a>
              </div>
              <div className="col-md-3 col-sm-6 my-3">
                <a href="#!">
                  <img
                    className="img-fluid img-brand d-block mx-auto"
                    src={ibmLogo}
                    alt="..."
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Contact*/}
        <ContactSection />

        {/* Footer*/}

        {/* Portfolio item 1 modal popup*/}
        <div
          className="portfolio-modal modal fade"
          id="portfolioModal1"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-bs-dismiss="modal">
                <img src={closeIcon} alt="Close modal" />
              </div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      {/* Project details*/}
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                      <img
                        className="img-fluid d-block mx-auto"
                        src={p1}
                        alt="..."
                      />
                      <p>
                        Use this area to describe your project. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Est
                        blanditiis dolorem culpa incidunt minus dignissimos
                        deserunt repellat aperiam quasi sunt officia expedita
                        beatae cupiditate, maiores repudiandae, nostrum,
                        reiciendis facere nemo!
                      </p>
                      <ul className="list-inline">
                        <li>
                          <strong>Client:</strong>
                          Explore
                        </li>
                        <li>
                          <strong>Category:</strong>
                          Graphic Design
                        </li>
                      </ul>
                      <button
                        className="btn btn-primary btn-xl text-uppercase"
                        data-bs-dismiss="modal"
                        type="button"
                      >
                        <i className="fas fa-times me-1" />
                        Close Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="portfolio-modal modal fade"
          id="portfolioModal2"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-bs-dismiss="modal">
                <img src={closeIcon} alt="Close modal" />
              </div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      {/* Project details*/}
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                      <img
                        className="img-fluid d-block mx-auto"
                        src={p2}
                        alt="..."
                      />
                      <p>
                        Use this area to describe your project. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Est
                        blanditiis dolorem culpa incidunt minus dignissimos
                        deserunt repellat aperiam quasi sunt officia expedita
                        beatae cupiditate, maiores repudiandae, nostrum,
                        reiciendis facere nemo!
                      </p>
                      <ul className="list-inline">
                        <li>
                          <strong>Client:</strong>
                          Explore
                        </li>
                        <li>
                          <strong>Category:</strong>
                          Graphic Design
                        </li>
                      </ul>
                      <button
                        className="btn btn-primary btn-xl text-uppercase"
                        data-bs-dismiss="modal"
                        type="button"
                      >
                        <i className="fas fa-times me-1" />
                        Close Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Portfolio item 3 modal popup*/}
        <div
          className="portfolio-modal modal fade"
          id="portfolioModal3"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-bs-dismiss="modal">
                <img src={closeIcon} alt="Close modal" />
              </div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      {/* Project details*/}
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                      <img
                        className="img-fluid d-block mx-auto"
                        src={p3}
                        alt="..."
                      />
                      <p>
                        Use this area to describe your project. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Est
                        blanditiis dolorem culpa incidunt minus dignissimos
                        deserunt repellat aperiam quasi sunt officia expedita
                        beatae cupiditate, maiores repudiandae, nostrum,
                        reiciendis facere nemo!
                      </p>
                      <ul className="list-inline">
                        <li>
                          <strong>Client:</strong>
                          Finish
                        </li>
                        <li>
                          <strong>Category:</strong>
                          Identity
                        </li>
                      </ul>
                      <button
                        className="btn btn-primary btn-xl text-uppercase"
                        data-bs-dismiss="modal"
                        type="button"
                      >
                        <i className="fas fa-times me-1" />
                        Close Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Portfolio item 4 modal popup*/}
        <div
          className="portfolio-modal modal fade"
          id="portfolioModal4"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-bs-dismiss="modal">
                <img src={closeIcon} alt="Close modal" />
              </div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      {/* Project details*/}
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                      <img
                        className="img-fluid d-block mx-auto"
                        src={p4}
                        alt="..."
                      />
                      <p>
                        Use this area to describe your project. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Est
                        blanditiis dolorem culpa incidunt minus dignissimos
                        deserunt repellat aperiam quasi sunt officia expedita
                        beatae cupiditate, maiores repudiandae, nostrum,
                        reiciendis facere nemo!
                      </p>
                      <ul className="list-inline">
                        <li>
                          <strong>Client:</strong>
                          Lines
                        </li>
                        <li>
                          <strong>Category:</strong>
                          Branding
                        </li>
                      </ul>
                      <button
                        className="btn btn-primary btn-xl text-uppercase"
                        data-bs-dismiss="modal"
                        type="button"
                      >
                        <i className="fas fa-times me-1" />
                        Close Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Portfolio item 5 modal popup*/}
        <div
          className="portfolio-modal modal fade"
          id="portfolioModal5"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-bs-dismiss="modal">
                <img src={closeIcon} alt="Close modal" />
              </div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      {/* Project details*/}
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                      <img
                        className="img-fluid d-block mx-auto"
                        src={p5}
                        alt="..."
                      />
                      <p>
                        Use this area to describe your project. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Est
                        blanditiis dolorem culpa incidunt minus dignissimos
                        deserunt repellat aperiam quasi sunt officia expedita
                        beatae cupiditate, maiores repudiandae, nostrum,
                        reiciendis facere nemo!
                      </p>
                      <ul className="list-inline">
                        <li>
                          <strong>Client:</strong>
                          Southwest
                        </li>
                        <li>
                          <strong>Category:</strong>
                          Website Design
                        </li>
                      </ul>
                      <button
                        className="btn btn-primary btn-xl text-uppercase"
                        data-bs-dismiss="modal"
                        type="button"
                      >
                        <i className="fas fa-times me-1" />
                        Close Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Portfolio item 6 modal popup*/}
        <div
          className="portfolio-modal modal fade"
          id="portfolioModal6"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-bs-dismiss="modal">
                <img src={closeIcon} alt="Close modal" />
              </div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      {/* Project details*/}
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                      <img
                        className="img-fluid d-block mx-auto"
                        src={p6}
                        alt="..."
                      />
                      <p>
                        Use this area to describe your project. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Est
                        blanditiis dolorem culpa incidunt minus dignissimos
                        deserunt repellat aperiam quasi sunt officia expedita
                        beatae cupiditate, maiores repudiandae, nostrum,
                        reiciendis facere nemo!
                      </p>
                      <ul className="list-inline">
                        <li>
                          <strong>Client:</strong>
                          Window
                        </li>
                        <li>
                          <strong>Category:</strong>
                          Photography
                        </li>
                      </ul>
                      <button
                        className="btn btn-primary btn-xl text-uppercase"
                        data-bs-dismiss="modal"
                        type="button"
                      >
                        <i className="fas fa-times me-1" />
                        Close Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default AboutPage;
