import React from "react";
import watchSlider from "../assets/images/watch.png";

const SliderSection = () => {
  return (
    <section className="slider_section position-relative">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <div className="slider_item-box">
              <div className="slider_item-container">
                <div className="container">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="slider_img-box">
                        <div>
                          <img src={watchSlider} alt="" className="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="slider_item-detail">
                        <div>
                          <h1>Stylish watches</h1>
                          <p>
                            Unveil Timeless Sophistication: Elevate Your Wrist
                            Game with Our Exquisite Collection, Crafted to Make
                            Every Moment Remarkable.
                          </p>
                          <div className="d-flex">
                            <a href="#about" className="slider-btn1 mr-3">
                              Read More
                            </a>
                            <a href="#contact" className="slider-btn2">
                              Contact Us
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="10000">
            <div className="slider_item-box">
              <div className="slider_item-container">
                <div className="container">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="slider_img-box">
                        <div>
                          <img src={watchSlider} alt="" className="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="slider_item-detail">
                        <div>
                          <h1>Stylish watches</h1>
                          <p>
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco l
                          </p>
                          <div className="d-flex">
                            <a href="#about" className="slider-btn1 mr-3">
                              Read More
                            </a>
                            <a href="#contact" className="slider-btn2">
                              Contact Us
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="10000">
            <div className="slider_item-box">
              <div className="slider_item-container">
                <div className="container">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="slider_img-box">
                        <div>
                          <img src={watchSlider} alt="" className="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="slider_item-detail">
                        <div>
                          <h1 className="">Stylish watches</h1>
                          <p>
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco l
                          </p>
                          <div className="d-flex">
                            <a href="#about" className="slider-btn1 mr-3">
                              Read More
                            </a>
                            <a href="#contact" className="slider-btn2">
                              Contact Us
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="custom_carousel-control">
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="next"
          >
            <span class="carousel-control-next" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
