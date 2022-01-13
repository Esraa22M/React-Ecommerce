import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { ButtonContainer } from "./styles/Navbar.style";
import { ProductWrapper , CardFooterContainer } from "../components/styles/Product.style";
class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <>
        <ProductWrapper className="col-9 col-md-6 col-lg-4 background-blue mx-lg-0 mx-auto">
          <div className="card background-dark mb-3 border-0 b rounded">
            <div
              className="img-container px-5 pt-5 card-img-top"
              onClick={() => console.log("clicked")}
            >
              <Link to="/details">
                <img
                  src={process.env.PUBLIC_URL + img}
                  width={"220px"}
                  height={"250px"}
                  alt="product"
                  className="card-img-top"
                ></img>
              </Link>
              <ButtonContainer
                className="cart-btn mb-0 p-b-0 button-visiblity"
                disabled={inCart ? true : false}
                onClick={()=>console.log("button clicked")}
              >
                {inCart ? (
                  <p className="text-capitalize" disabled>
                    In Cart
                  </p>
                ) : (
                  <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                )}
              </ButtonContainer>
            </div>
            {/* cart footer */}
            <CardFooterContainer className="card-footer d-flex justify-content-between">
                <div>{title}</div>
                <div>{price} $</div>
            </CardFooterContainer>
          </div>
        </ProductWrapper>
      </>
    );
  }
}

// #endregion

export default Product;
