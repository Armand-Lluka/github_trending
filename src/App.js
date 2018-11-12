import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Languages from "./components/Languages";
import langArray from "./components/icons/iconsArray";

// import styled from "styled-components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trendingRes: [],
      icons: langArray,
      lang: 'Javascript'
    };
  }

  Hello = () => alert('Hello')

  componentDidMount() {

    if (this.lang !== '') {
      console.log(this.state.lang)
      const url = "https://github-trending-api.now.sh/repositories?language=javascript&since=weekly"
      fetch(
        // `https://github-trending-api.now.sh/repositories?${this.state.lang}=all&since=weekly`
        url
      )
        .then(res => res.json())
        .then(data => this.setState({ trendingRes: data }));
    }



  }

  render() {
    return (
      <div>
        <Header />
        <Languages langArray={this.state.icons} greet={this.Hello} />
        <List repoName={this.state.trendingRes} langArray={this.state.icons} />
      </div>
    );
  }
}

export default App;

// {
/* {this.state.trendingRes.slice(0, 10).map((d, idx) => {
          return <li key={idx}>{d.name}</li>;
        })} */
// }
