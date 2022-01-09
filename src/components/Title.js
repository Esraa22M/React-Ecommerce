import React from "react";
import styled from "styled-components";
const Title = ({ name, title }) => {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center text-title">
        <h1 className="text-capitalize font-weight-bold">
          {name}
          <strong>{title}</strong>
        </h1>
      </div>
    </div>
  );
};
// #endregion

export default Title;
