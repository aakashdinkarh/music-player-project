import React from "react";
import { Link } from "react-router-dom";

//Styles
import { Content } from "./Breadcrumb.styles";

const Breadcrumb = ({ breadcrumb_el }) => (
  <Content>
    {Object.entries(breadcrumb_el).map(([key, value], ind) =>
      ind !== Object.keys(breadcrumb_el).length - 1 ? (
        <span key={ind}>
          <Link to={value}>
            <span>{key}</span>
          </Link>
          <span>/</span>
        </span>
      ) : (
        <span key={ind}>{key}</span>
      )
    )}
  </Content>
);

export default Breadcrumb;
