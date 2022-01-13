import React from "react";
import { ResturantProducts, detailProduct } from "./data";
const ProductContext = React.createContext();
class ProductProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: ResturantProducts,
      detailProduct: detailProduct,
    };
  }
  handleDetails = ()=>{
    console.log("details");
  }
  handleAddToCart=()=>{
    console.log("Add to Cart");
  }
  render() {
    return (
      <ProductContext.Provider
        value={{
            ...this.state,
          handleDetails:this.handleDetails,
          handleAddToCart:this.handleAddToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;
// #endregion

export { ProductProvider, ProductConsumer };
