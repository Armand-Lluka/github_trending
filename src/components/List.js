/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import styled from "styled-components";
import iconsArray from "./icons/iconsArray.js";

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

const Capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default class List extends Component {
  render() {
    const apiTopTen = this.props.repoName.slice(0, 25);
    return (
      <Section>
        <UL>
          {apiTopTen.map((d, idx) => {
            const lang = d.language;
            return (
              <ListItem key={idx}>
                <Icon
                  src={
                    iconsArray[lang]
                      ? iconsArray[lang]
                      : "http://tachyons.io/img/avatar-mrmrs.jpg"
                  }
                />

                <div className="pl3 flex-auto">
                  <A href={d.url} target={"_blank"}>
                    <span className="f5 fw9 b db black-70">
                      {Capitalize(d.name)}
                    </span>
                  </A>
                  <span className="f6 db black-70">{d.description}</span>
                </div>
                {/* <div>
                  <a href="tel:" className="f6 link blue hover-dark-gray">
                    +1 (999) 555-5555
                  </a>
                </div> */}
              </ListItem>
            );
          })}
        </UL>
      </Section>
    );
  }
}

// {
/* <ul class="list pl0 mt0 measure center">
<li class="flex items-center lh-copy pa3 ph0-l bb b--black-10">
  <img
    className="w2 h2 w3-ns h3-ns br-100"
    src="http://tachyons.io/img/avatar-mrmrs.jpg"
  />
  <div class="pl3 flex-auto">
    <span class="f6 db black-70">Mrmrs</span>
    <span class="f6 db black-70">Medium Hexagon, LLC</span>
  </div>
  <div>
    <a href="tel:" class="f6 link blue hover-dark-gray">
      +1 (999) 555-5555
    </a>
  </div>
</li>
</ul> */
// }

// {apiTopTen.map((d, idx) => {
//   return (
//     <a className="link" href={d.url}>
//       <Name key={idx}>{d.name}</Name>
//     </a>
//   );
// })}
