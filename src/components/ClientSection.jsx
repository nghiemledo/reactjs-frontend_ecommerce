import React from "react";
import clientIMG from "../assets/images/client.jpg";

const testimonials = [
  {
    name: "John Doe",
    title: "Watch Enthusiast",
    content:
      "I'm extremely impressed with the quality of the watches I've purchased from LuxChronos. The craftsmanship is outstanding, and the customer service is top-notch. I highly recommend this shop to any watch enthusiast!",
  },
  {
    name: "Emily Smith",
    title: "Customer",
    content:
      "LuxChronos has a fantastic selection of watches, and their prices are unbeatable. I've purchased multiple watches from them, and I've always been pleased with the quality and service. Definitely my go-to shop for watches!",
  },
];

const ClientSection = () => {
  return (
    <section className="client_section layout_padding-bottom">
      <div className="container">
        <h3 className="custom_heading">Testimonial</h3>
        <p className="font-weight-bold">
          See What Our Customers Say About LuxChronos
        </p>
      </div>
      <div className="container" />
      <div
        id="carouselExample2Controls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="detail_box">
                      <div className="img_box">
                        <img src={clientIMG} alt="" />
                      </div>
                      <div className="name_box">
                        <h5>{testimonial.name}</h5>
                        <h6>{testimonial.title}</h6>
                      </div>
                    </div>
                    <div className="detail_text">
                      <p>{testimonial.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExample2Controls"
          role="button"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExample2Controls"
          role="button"
          data-bs-slide="next"
        >
          <span className="carousel-control-next" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </section>
  );
};

export default ClientSection;
