import React, { Component } from "react";
import styled from "styled-components";

const Section = styled.section.attrs({
  className: "pv4 ph3 ph5-ns tc"
})``;

const Link = styled.a.attrs({
  className: "link hover-near-black hover-silver dim dib h3 w3 mr3"
})``;

const Span = styled.span.attrs({
  className: "f6 db"
})``;

export default class Languages extends Component {
  render() {
    return (
      <Section>
        <Link onClick={this.props.greet}>
          <img src={this.props.langArray.C} alt="C" />
          <Span className>C</Span>
        </Link>
        <Link>
          <img src={this.props.langArray["C#"]} alt="C" />
          <Span className>C#</Span>
        </Link>
        <Link>
          <img src={this.props.langArray["C++"]} alt="C" />
          <Span className>C++</Span>
        </Link>
        <Link>
          <img src={this.props.langArray.Go} alt="C" />
          <Span className>Go</Span>
        </Link>
        <Link>
          <img src={this.props.langArray.Java} alt="C" />
          <Span className>Java</Span>
        </Link>{" "}
        <Link>
          <img src={this.props.langArray.JavaScript} alt="C" />
          <Span className>JavaScript</Span>
        </Link>{" "}
        <Link>
          <img src={this.props.langArray.PHP} alt="C" />
          <Span className>PHP</Span>
        </Link>
        <Link>
          <img src={this.props.langArray.Python} alt="C" />
          <Span className>Python</Span>
        </Link>
        <Link>
          <img src={this.props.langArray.Ruby} alt="C" />
          <Span className>Ruby</Span>
        </Link>
        <Link>
          <img src={this.props.langArray.Swift} alt="C" />
          <Span className>Swift</Span>
        </Link>
        <Link>
          <img src={this.props.langArray.TypeScript} alt="C" />
          <Span className>TypeScript</Span>
        </Link>
      </Section>
    );
  }
}
