import React from "react";
import watchSlider from "../assets/images/watch.png";
import watchSlider2 from "../assets/images/rolex-datejust-41-126331-0003-removebg-preview.png";
import watchSlider3 from "../assets/images/Patek_Philippe_Complications_5396R-014_Annual_Calendar___Moonphase-removebg-preview.png";

const sliderItems = [
  {
    image: watchSlider,
    title: "Stylish watches",
    description:
      "Unveil Timeless Sophistication: Elevate Your Wrist Game with Our Exquisite Collection, Crafted to Make Every Moment Remarkable.",
  },
  {
    image: watchSlider2,
    title: "Stylish watches",
    description:
      "Unveil Timeless Sophistication: Elevate Your Wrist Game with Our Exquisite Collection, Crafted to Make Every Moment Remarkable.",
  },
  {
    image: watchSlider3,
    title: "Stylish watches",
    description:
      "Unveil Timeless Sophistication: Elevate Your Wrist Game with Our Exquisite Collection, Crafted to Make Every Moment Remarkable.",
  },
];

const SliderSection = () => {
  return (
    <section className="slider_section position-relative">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {sliderItems.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-bs-interval="10000"
            >
              <div className="slider_item-box">
                <div className="slider_item-container">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="slider_img-box">
                          <div>
                            <img src={item.image} alt="" className="" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="slider_item-detail">
                          <div>
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
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
          ))}
        </div>
        <div className="custom_carousel-control">
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="next"
          >
            <span className="carousel-control-next" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
