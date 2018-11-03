import React, { Component } from "react";
import styled from "styled-components";

const Section = styled.section.attrs({
  className: ""
})``;

const Name = styled.h1.attrs({
  className: "f4 fw6 db red  dim"
})``;

export default class List extends Component {
  render() {
    const apiTopTen = this.props.repoName.slice(0, 10);

    return (
      <Section>
        Hello
        {apiTopTen.map((d, idx) => {
          return (
            <a className="link" href={d.url}>
              <Name key={idx}>{d.name}</Name>
            </a>
          );
        })}
      </Section>
    );
  }
}
