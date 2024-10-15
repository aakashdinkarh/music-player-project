import React from "react";
import { Link } from "react-router-dom";

//styles
import { Wrapper } from "./NotFound.styles";

const NotFound = () => {
  return (
    <Wrapper>
      <h1>404</h1>
      <p>Oops! Looks like you're lost.</p>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go back to Home</Link>
    </Wrapper>
  );
};
export default NotFound;
