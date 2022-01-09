import React from "react";
import { Link } from "react-router-dom";
import { NavStyled } from "./style";

const Nav = () => {
  return (
    <NavStyled>
      <Link to={"/"}>home</Link>
      <Link to={"/other"}>other</Link>
    </NavStyled>
  );
};

export default Nav;
