import "bootstrap/dist/css/bootstrap.min.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {Routes ,Route , Link} from 'react-router-dom'
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import React from "react";
function App() {
  return (
   <>
    <Navbar/>
    <Routes>
      <Route path="/details" element={<Details/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route exact path="/" element={<ProductList/>}/>
      <Route path="*" element={<Default/>}/>

    </Routes>
   </>
  );
}

export default App;
