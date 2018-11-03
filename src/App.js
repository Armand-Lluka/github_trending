import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Languages from "./components/Languages";
// import styled from "styled-components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trendingRes: [],
      icons: []
    };
  }

  componentDidMount() {
    fetch(
      "https://github-trending-api.now.sh/repositories?language=all&since=weekly"
    )
      .then(res => res.json())
      .then(data => this.setState({ trendingRes: data }));
  }

  render() {
    return (
      <div>
        <Header />
        <Languages />
        <List repoName={this.state.trendingRes} />
      </div>
    );
  }
}

export default App;

{
  /* {this.state.trendingRes.slice(0, 10).map((d, idx) => {
          return <li key={idx}>{d.name}</li>;
        })} */
}
