/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import styled from "styled-components";
import iconsArray from "./icons/iconsArray.js";
// import Spinner from "./Spinner"

// Styled Tachyons Components

const Section = styled.section.attrs({
  className: ""
})``;

const Icon = styled.img.attrs({
  className: "w2 h2 w3-ns h3-ns br-100"
})``;

const A = styled.a.attrs({
  className: "link underline-hover black"
})``;

const UL = styled.ul.attrs({
  className: "list pl0 mt0 measure center"
})``;

const ListItem = styled.li.attrs({
  className: "flex items-center lh-copy pa3 ph0-l bb b--black-10"
})``;


// Helper Functions

const Capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};




export default class List extends Component {
  render() {
    const {repoName, handleClick, starredList} = this.props
    return (
      <Section>
        {/* {this.props.loading ? <Spinner></Spinner> : <UL></UL> } */}
        {/* <Spinner className="ma7"></Spinner> */}
        <UL>
          {repoName.map((result, index) => {
            const lang = result.language;
            return (
              <ListItem key={index}>
                <Icon 
                  src={
                    iconsArray[lang]
                      ? iconsArray[lang]
                      : "http://tachyons.io/img/avatar-mrmrs.jpg"
                  }
                />
                <div className="pl3 flex-auto">
                  <A  href={result.url} target={"_blank"}>
                    <span className="f5 fw9 b db black-70">
                      {Capitalize(result.name)}
                    </span> 
                  </A>
                  <span  className="f6 db black-70">{result.description}</span>
                </div>
                {starredList.includes(result) ? <img  src={iconsArray.StarOn} className="h1 w1 h2-ns w2-ns" onClick={(e) => handleClick(e,repoName[index]) }  /> : <img  src={iconsArray.StarOf} className="h1 w1 h2-ns w2-ns" onClick={(e) => handleClick(e,repoName[index]) }  /> }
  
              </ListItem>
            );
          })}
        </UL>
      </Section>
    );
  }
}

                {/* <img  src={starredList.includes(d) ? iconsArray.StarOn : iconsArray.StarOf} className="h1 w1 h2-ns w2-ns" onClick={(e) => handleClick(e,repoName[index]) }  /> */}
                {/* <img  src={iconsArray.StarOf} className="h1 w1 h2-ns w2-ns" onClick={(e) => handleClick(e,repoName[index]) }  /> */}
