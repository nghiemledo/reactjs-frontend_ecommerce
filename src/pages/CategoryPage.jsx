import React from "react";
import bannerCategory from "../assets/images/banner-category.jpg";
import CategorySidebar from "../components/CategorySidebar";
import ProductCard from "../components/ProductCard";

const CategoryPage = () => {
  return (
    <div className="category-page container">
      <div className="row">
        <div className="col-3">
          <CategorySidebar />
        </div>
        <div className="col-lg-9 main-content">
          <div className="owl-carousel owl-theme home-slider category-home-slider owl-theme owl-carousel-lazy owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(0px, 0px, 0px)",
                  transition: "all 0s ease 0s",
                  width: 2640,
                }}
              >
                <div className="owl-item active" style={{ width: 880 }}>
                  <div className="home-slide home-slide1 banner banner-md-vw banner-sm-vw d-flex align-items-center">
                    <figure>
                      <img src={bannerCategory} width={880} height={280} />
                    </figure>
                    <div className="banner-layer">
                      <h4 className="text-white mb-0">
                        Find the Boundaries. Push Through!
                      </h4>
                      <h2 className="text-white mb-0">Summer Sale</h2>
                      <h3 className="text-white text-uppercase m-b-3">
                        30% Off
                      </h3>
                      <h5 className="text-white text-uppercase d-inline-block mb-0 ls-n-20 align-text-bottom">
                        Starting At{" "}
                        <b className="coupon-sale-text bg-white text-danger d-inline-block">
                          $<em className="align-text-top">199</em>99
                        </b>
                      </h5>
                      <a className="btn btn-dark btn-md" href="#">
                        GET YOURS!
                      </a>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: 880 }}>
                  <div className="home-slide home-slide2 banner banner-md-vw banner-sm-vw d-flex align-items-center">
                    <figure>
                      <img
                        alt="category-banenr"
                        src="images/home/banners/banner-5.jpg"
                        width={880}
                        height={280}
                      />
                    </figure>
                    <div className="banner-layer text-uppercase">
                      <h4 className="m-b-2">
                        Over 200 products with discounts
                      </h4>
                      <h2 className="m-b-3">Great Deals</h2>
                      <h5 className="d-inline-block mb-0 align-top mr-3 mb-2">
                        Starting At
                        <b>
                          $<em>299</em>99
                        </b>
                      </h5>
                      <a
                        className="btn btn-dark btn-md"
                        href="/react/porto/demo1/shop/"
                      >
                        Get Yours!
                      </a>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: 880 }}>
                  <div className="home-slide home-slide3 banner banner-md-vw banner-sm-vw  d-flex align-items-center">
                    <figure>
                      <img
                        alt="category-banenr"
                        src="images/home/banners/banner-6.jpg"
                        width={880}
                        height={280}
                      />
                    </figure>
                    <div className="banner-layer text-uppercase">
                      <h4 className="m-b-2">Up to 70% off</h4>
                      <h2 className="m-b-3">New Arrivals</h2>
                      <h5 className="d-inline-block mb-0 align-top mr-4 pr-3 mb-2 ml-0">
                        Starting At
                        <b>
                          $<em>299</em>99
                        </b>
                      </h5>
                      <a
                        className="btn btn-dark btn-md"
                        href="/react/porto/demo1/shop/"
                      >
                        Get Yours!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav disabled">
              <div className="owl-prev">
                <i className="icon-angle-left" />
              </div>
              <div className="owl-next">
                <i className="icon-angle-right" />
              </div>
            </div>
            <div className="owl-dots disabled" />
          </div>
          <nav className="toolbox sticky-header mobile-sticky">
            <div className="toolbox-left">
              <div className="toolbox-item toolbox-sort">
                <label>Sort By:</label>
                <div className="select-custom">
                  <select name="orderby" className="form-control">
                    <option value="default">Default sorting</option>
                    <option value="popularity">Sort by popularity</option>
                    <option value="rating">Sort by average rating</option>
                    <option value="date">Sort by newness</option>
                    <option value="price">Sort by price: low to high</option>
                    <option value="price-desc">
                      Sort by price: high to low
                      {/* <div className="sort-icon">
                        <svg
                          viewBox="0 0 24 24"
                          style={{ width: 24, height: 24 }}
                        >
                          <path
                            fill="currentColor"
                            d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                          />
                        </svg>
                      </div> */}
                      s
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="toolbox-right">
              <div className="toolbox-item toolbox-show">
                <label>Show:</label>
                <div className="select-custom">
                  <select name="count" className="form-control">
                    <option value={12}>12</option>
                    <option value={24}>24</option>
                    <option value={36}>36</option>
                  </select>
                </div>
              </div>
            </div>
          </nav>
          <div className="row skeleton-body skel-shop-products  loaded">
            <div className="col-3 col-sm-3">
              <a href="">
                <ProductCard />
              </a>
            </div>
            <div className="col-3 col-sm-3">
              <a href="">
                <ProductCard />
              </a>
            </div>
            <div className="col-3 col-sm-3">
              <a href="">
                <ProductCard />
              </a>
            </div>
            <div className="col-3 col-sm-3">
              <a href="">
                <ProductCard />
              </a>
            </div>
            <div className="col-3 col-sm-3">
              <a href="">
                <ProductCard />
              </a>
            </div>
            <div className="col-3 col-sm-3">
              <a href="">
                <ProductCard />
              </a>
            </div>
            <div className="col-3 col-sm-3">
              <a href="">
                <ProductCard />
              </a>
            </div>
            <div className="col-3 col-sm-3">
              <a href="">
                <ProductCard />
              </a>
            </div>
          </div>

          <nav className="toolbox toolbox-pagination">
            <div className="toolbox-item toolbox-show">
              <label>Show:</label>
              <div className="select-custom">
                <select name="count" className="form-control">
                  <option value={12}>12</option>
                  <option value={24}>24</option>
                  <option value={36}>36</option>
                </select>
              </div>
            </div>
            <ul className="pagination toolbox-item">
              <li className="page-item active">
                <a className="page-link" href="/react/porto/demo1/shop/?page=1">
                  1<span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="page-item ">
                <a className="page-link" href="/react/porto/demo1/shop/?page=2">
                  2
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link page-link-btn"
                  href="/react/porto/demo1/shop/?page=2"
                >
                  <i className="icon-angle-right" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
