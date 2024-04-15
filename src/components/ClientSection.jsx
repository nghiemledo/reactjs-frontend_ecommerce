import React from "react";
import clientIMG from "../assets/images/client.jpg";

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
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="detail_box">
                    <div className="img_box">
                      <img src={clientIMG} alt="" />
                    </div>
                    <div className="name_box">
                      <h5>Sandy Den</h5>
                      <h6>Many Variations</h6>
                    </div>
                  </div>
                  <div className="detail_text">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to beThere are many
                      variations of passages
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="detail_box">
                    <div className="img_box">
                      <img src={clientIMG} alt="" />
                    </div>
                    <div className="name_box">
                      <h5>Sandy Den</h5>
                      <h6>Many Variations</h6>
                    </div>
                  </div>
                  <div className="detail_text">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to beThere are many
                      variations of passages
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="detail_box">
                    <div className="img_box">
                      <img src={clientIMG} alt="" />
                    </div>
                    <div className="name_box">
                      <h5>Sandy Den</h5>
                      <h6>Many Variations</h6>
                    </div>
                  </div>
                  <div className="detail_text">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to beThere are many
                      variations of passages
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExample2Controls"
          role="button"
          data-slide="prev"
        >
          <span className="sr-only"></span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExample2Controls"
          role="button"
          data-slide="next"
        >
          <span className="sr-only"></span>
        </a>
      </div>
    </section>
  );
};

export default ClientSection;
