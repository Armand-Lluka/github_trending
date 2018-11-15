import React, { Component } from "react";
import styled from "styled-components"

const Tablist = styled.li.attrs({
className: "list mr4 f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-navy dib fw7 shadow-5 helvetica"
})` `

export default class Tab extends Component {
    onClick = () => {
      const { label, onClick } = this.props;
      onClick(label);
    };
  
    render() {
      const {
        onClick,
        props: { label }
      } = this;
  
      
  
      return (
        <Tablist tabIndex="11"  onClick={onClick}>
          {label}
        </Tablist>
      );
    }
  }
  