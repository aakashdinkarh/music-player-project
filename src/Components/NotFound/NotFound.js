import React from "react";
import { Link } from "react-router-dom";

//styles
import { Wrapper } from "./NotFound.styles";
//components
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const NotFound = () => {
  //breadcrumb element
  const breadcrumb_el = {
    Home: "/",
    Player: "/player",
  };

  return (
    <Wrapper>
      <Breadcrumb breadcrumb_el={breadcrumb_el} />
      Something went wrong, <br />
      <p>
        No audio found
        <br />
        <Link to="/">Click here to go back to choose songs...</Link>
      </p>
    </Wrapper>
  );
};
export default NotFound;
