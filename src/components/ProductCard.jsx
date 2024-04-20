import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import addToCartIcon from "../assets/images/shopping-cart.png";
import { CardText } from "react-bootstrap";

function ProductCard() {
  return (
    <div className="card shadow mb-3">
      <button className="d-flex justify-content-end btn btn-success ms-auto p-1 bd-highlight" style={{border: "0"}} >
        <span className="mb-0 text-gray" style={{fontSize: "15px"}}>
          $299.00
        </span>
      </button>
      <img
        src="https://product.hstatic.net/200000597439/product/upload_e4a8523c95814dfd8bc68692951b1c8f_grande.jpg"
        className="card-img-top"
        alt="black watch"
      />
      <div className="card-body">
        <a href="#" className="h5 card-title">
          Apple Watch Series 3
        </a>
        <h3 className="h6 fw-light text-gray mt-2">
          Space Gray Aluminum Case with Black Sport Band
        </h3>
        <div className="d-flex mt-3">
          <span className="star fas fa-star text-warning me-1" />
          <span className="star fas fa-star text-warning me-1" />
          <span className="star fas fa-star text-warning me-1" />
          <span className="star fas fa-star text-warning me-1" />
          <span className="star fas fa-star text-warning" />
          <span className="badge bg-primary ms-2">4.7</span>
        </div>
        <div
          className="mt-3 w-100"
          // style={{ maxWidth: "4000px" }}
        >
          <a
            type="button"
            className="btn btn-primary"
            style={{ borderRadius: "13px", width: "100%" }}
            href="#"
          >
            <span className="fas fa-cart-plus me-2" /> Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
