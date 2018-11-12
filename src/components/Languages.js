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
        <Link onClick={ () => this.props.lang('C')}>
          <img src={this.props.langArray.C} alt="C" />
          <Span className>C</Span>
        </Link>
        <Link onClick={ () => this.props.lang('csharp')}>
          <img src={this.props.langArray["C#"]} alt="C#" />
          <Span className>C#</Span>
        </Link>
        <Link onClick={ () => this.props.lang('c%2B%2B')}>
          <img src={this.props.langArray["C++"]} alt="C++" />
          <Span className>C++</Span>
        </Link>
        <Link onClick={ () => this.props.lang('go')}>
          <img src={this.props.langArray.Go} alt="Golang" />
          <Span className>Go</Span>
        </Link>
        <Link onClick={ () => this.props.lang('java')}>
          <img src={this.props.langArray.Java} alt="Java" />
          <Span className>Java</Span>
        </Link>{" "}
        <Link onClick={ () => this.props.lang('javascript')}>
          <img src={this.props.langArray.JavaScript} alt="Javascript" />
          <Span className>JavaScript</Span>
        </Link>{" "}
        <Link onClick={ () => this.props.lang('php')}>
          <img src={this.props.langArray.PHP} alt="PHP" />
          <Span className>PHP</Span>
        </Link>
        <Link onClick={ () => this.props.lang('python')}>
          <img src={this.props.langArray.Python} alt="Python" />
          <Span className>Python</Span>
        </Link>
        <Link onClick={ () => this.props.lang('ruby')}>
          <img src={this.props.langArray.Ruby} alt="Ruby" />
          <Span className>Ruby</Span>
        </Link>
        <Link onClick={ () => this.props.lang('swift')}>
          <img src={this.props.langArray.Swift} alt="Swift" />
          <Span className>Swift</Span>
        </Link>
        <Link onClick={ () => this.props.lang('typescript')}>
          <img src={this.props.langArray.TypeScript} alt="TypeScript" />
          <Span className>TypeScript</Span>
        </Link>
      </Section>
    );
  }
}
