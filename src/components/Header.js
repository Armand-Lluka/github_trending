import React from "react";
import logo from "../logo.png";
import styled from "styled-components";

// Styled Tachyons Components

const Header = styled.header.attrs({
  className: "tc pv4 pv5-ns"
})``;

const HeaderLogo = styled.img.attrs({
  className: "br-100 pa1 ba b--black-10 h3 w3"
})``;

const Title = styled.h1.attrs({
  className: "f5 f4-ns fw6 mid-gray courier"
})``;

const Name = styled.h2.attrs({
  className: "f6 gray fw2 ttu tracked courier"
})``;

// Styled Tachyons Components



export default () => (
  <Header>
    <HeaderLogo src={logo} alt="avatar" />
    <Title> GitTrendz </Title>
    <Name> Armand Lluka </Name>
  </Header>
);
