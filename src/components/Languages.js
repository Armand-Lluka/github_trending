import React, { Component } from "react";
import styled from "styled-components";
import langArray from "./icons/iconsArray";

const Section = styled.section.attrs({
  className: "pv4 ph3 ph5-ns tc"
})``;

const Link = styled.a.attrs({
  className: "link hover-near-black hover-silver dim dib h3 w3 mr3"
})``;

const Span = styled.span.attrs({
  className: "f6 db"
})``;

console.log(langArray);

export default class Languages extends Component {
  render() {
    return (
      <Section>
        <Link>
          <img src={langArray[0]} alt="C" />
          <Span className>C</Span>
        </Link>
        <Link>
          <img src={langArray[1]} alt="C" />
          <Span className>C#</Span>
        </Link>
        <Link>
          <img src={langArray[2]} alt="C" />
          <Span className>C++</Span>
        </Link>
        <Link>
          <img src={langArray[3]} alt="C" />
          <Span className>Gol</Span>
        </Link>
        <Link>
          <img src={langArray[4]} alt="C" />
          <Span className>Java</Span>
        </Link>{" "}
        <Link>
          <img src={langArray[5]} alt="C" />
          <Span className>JS</Span>
        </Link>{" "}
        <Link>
          <img src={langArray[6]} alt="C" />
          <Span className>PHP</Span>
        </Link>
        <Link>
          <img src={langArray[7]} alt="C" />
          <Span className>Python</Span>
        </Link>
        <Link>
          <img src={langArray[8]} alt="C" />
          <Span className>Ruby</Span>
        </Link>
        <Link>
          <img src={langArray[9]} alt="C" />
          <Span className>Swift</Span>
        </Link>
        <Link>
          <img src={langArray[10]} alt="C" />
          <Span className>TS</Span>
        </Link>
      </Section>
    );
  }
}
