import React from "react";
import styled from "styled-components";
const ProductContext = React.createContext();
class ProductProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ProductContext.Provider value={"hello from context"}>{this.props.children}</ProductContext.Provider>
    );
  }
}
Context.defaultProps = defaultProps;
// #endregion

export default Context;
