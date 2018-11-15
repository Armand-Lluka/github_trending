/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import styled from "styled-components";
import iconsArray from "./icons/iconsArray.js";

// Styled Tachyons Components

const Icon = styled.img.attrs({
  className: "w2 h2 w3-ns h3-ns br-100"
})``;

const Link = styled.a.attrs({
  className: "link underline-hover black"
})``;

const UL = styled.ul.attrs({
  className: "list pl0 mt0 measure center"
})``;

const ListItem = styled.li.attrs({
  className: "flex items-center lh-copy pa3 ph0-l bb b--black-10"
})``;

const Star = styled.img.attrs({
  className: "h1 w1 h2-ns w2-ns"
})``

const Content = styled.div.attrs({
  className: "pl3 flex-auto"
})``
// Helper Functions

const Capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default class List extends Component {
  render() {
    const { repoName, handleClick, starredList } = this.props;
    return (
      <div>
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
                <Content >
                  <Link href={result.url} target={"_blank"}>
                    <span className="f5 fw9 b db black-70">
                      {Capitalize(result.name)}
                    </span>
                  </Link>
                  <span className="f6 db black-70">{result.description}</span>
                  <span className="f6 db black-70">{result.stars} stars</span>
                </Content>
                {(starredList.indexOf(result) !== -1) ? (
                  <Star
                    src={iconsArray.StarOn}
                    onClick={() => handleClick(repoName[index])}
                  />
                ) : (
                  <Star
                    src={iconsArray.StarOf}
                    onClick={() => handleClick(repoName[index])}
                  />
                )}
              </ListItem>
            );
          })}
        </UL>
      </div>
    );
  }
}

{
  /* <img  src={starredList.includes(d) ? iconsArray.StarOn : iconsArray.StarOf} className="h1 w1 h2-ns w2-ns" onClick={(e) => handleClick(e,repoName[index]) }  /> */
}
{
  /* <img  src={iconsArray.StarOf} className="h1 w1 h2-ns w2-ns" onClick={(e) => handleClick(e,repoName[index]) }  /> */
}
