import React from "react";
import Product from "./Product";
import Title from "./Title";
import { ResturantProducts } from "../data";
import { ProductConsumer } from "../Context";
class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Products: ResturantProducts,
    };
  }

  render() {
    console.log(this.state.Products);

    return (
      <>
        <div className="my-5">
          <div className="container">
            <Title name={"wake up little"} title={" sushi"}></Title>
            <div className="row">
              <ProductConsumer>
                {(hello) => {
                  return <h1>{hello}</h1>;
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </>
    );
  }
}
// #endregion

export default ProductList;
