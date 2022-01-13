import React from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../Context";
class ProductList extends React.Component {
   render() {
    return (
      <>
        <div className=" background-yellow h-100">
          <div className="container pty-5">
            <Title name={"wake up little"} title={" sushi"} className="p-5"></Title>
            <div className="row">
              <ProductConsumer className="row ">
                {
                  (value)=>{
                    return value.products.map((product)=>{
                      return <Product key={product.id} product={product}/>
                    })
                  }
                }
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
