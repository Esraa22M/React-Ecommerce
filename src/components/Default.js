import React from "react";
import { Wrapper, PandaWrapper } from "./styles/Default.style";
import PandaPageNotFound from "../assets/Machovka-panda.png";
class Default extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
        <Wrapper>
            <PandaWrapper>4</PandaWrapper>
            <div><img src={PandaPageNotFound} width={"400px"} height={"300px"}></img></div>
            <PandaWrapper>4</PandaWrapper>
        </Wrapper>
      );
  }
}

// #endregion

export default Default;
