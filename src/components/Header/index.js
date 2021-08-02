import React from "react";
import { Link } from "react-router-dom";
import RMBDLogo from "../../images/react-movie-logo.svg";
import TMBDLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.Styles";
const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <LogoImg src={RMBDLogo} alt="rmdb-logo" />
      </Link>
      <TMDBLogoImg src={TMBDLogo} alt="tmdb-logo" />
    </Content>
  </Wrapper>
);

export default Header;
