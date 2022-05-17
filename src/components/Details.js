import React from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, img, info, price, title, inCart } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* Product title */}
              <div className="col-10 m-auto text-center text-blue text-blue my-5">
                <h1>{title}</h1>
              </div>
              {/* end of product title */}
              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 ">
                  <img
                    src={process.env.PUBLIC_URL + img}
                    alt="productImage"
                    className="img-fluid"
                  />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-captilize">
                  <h3>
                    Type: <span>{title}</span>
                  </h3>

                  <h4 className=" mt-3 mb-2 text-primary">
                    <strong>
                      Price: <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about product:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* end of the info */}
                  <div>
                      <Link to="/"><button className="btn btn-secondary mx-2">Back to products</button></Link>
                      <button className="btn btn-success" disabled={inCart?true:false} onClick={()=>{
                          value.handleAddToCart()
                      }}>{inCart?"inCart":"Go to cart"}</button>

                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

// #endregion

export default Details;
