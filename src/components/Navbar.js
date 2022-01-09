import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
  ButtonContainer,
  ProductContainer,
  NavWrapper
} from "../components/styles/Navbar.style";
import Logo from "../Pand.png";
class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/" className="text-light ">
          <img
            src={Logo}
            width="100px"
            height="70px"
            alt="store"
            className="navbar-brand"
          ></img>
        </Link>
        

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link ">
              <ProductContainer>Products</ProductContainer>
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </span>
            My Cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

// #endregion

export default Navbar;
