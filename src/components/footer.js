import React from "react";
import styled from "styled-components";
import footer from "../assets/footer.png";
import {ButtonContainer} from "./styles/Navbar.style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  FooterContainer,
  FormContainer,
  LinkContainer,
  FooterColumn,
  OrangeDot,
  Footer,
  FooterHeading,
  FooterMainHeading,
} from "./styles/Footer.style";
class footee extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <FooterContainer>
        <FooterMainHeading>Panda Magic Sushi Bus</FooterMainHeading>

        <Footer>
          <FooterColumn>
            <FooterHeading>
              <h2>About US</h2>
            </FooterHeading>
            <LinkContainer><a href="#">Us</a></LinkContainer>
            <LinkContainer><a href="#">Blog</a></LinkContainer>
            <LinkContainer><a href="#">Demo</a></LinkContainer>
            <LinkContainer><a href="#">Customers</a></LinkContainer>
            <LinkContainer><a href="#">Investors</a></LinkContainer>
            <LinkContainer><a href="#">Tersms of Services</a></LinkContainer>
          </FooterColumn>
          <FooterColumn>
            <FooterHeading>
              <h2>Contact US</h2>
            </FooterHeading>
            <LinkContainer><a href="#">Contact Us</a></LinkContainer>
            <LinkContainer><a href="#">Investors</a></LinkContainer>
            <LinkContainer><a href="#">Terms of Services</a></LinkContainer>
          </FooterColumn>
          <FooterColumn>
            <FooterHeading>
              <h2>Social Media</h2>
            </FooterHeading>
            <LinkContainer><a href="#">Media</a></LinkContainer>
            <div>
              <LinkContainer><a href="#">
                <OrangeDot><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></OrangeDot>
              </a>
              <a href="#">
                <OrangeDot><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></OrangeDot>
              </a>
              <a href="#">
                <OrangeDot><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></OrangeDot>
              </a>
             <a href="#">
              <OrangeDot> <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></OrangeDot>
              </a></LinkContainer>
            </div>
          </FooterColumn>
          <FooterColumn>
            <FooterHeading>
              <h2>Join our newsletter</h2>
            </FooterHeading>
            <FormContainer>
              <input
                type={"email"}
                placeholder="Enter your email address"
              ></input>
              <ButtonContainer>Sing Up</ButtonContainer>
            </FormContainer>
            <div>
                <img src={footer} width={"200px"} height={"150px"}></img>
            </div>
          </FooterColumn>
        </Footer>
      </FooterContainer>
    );
  }
}

// #endregion

export default footee;
