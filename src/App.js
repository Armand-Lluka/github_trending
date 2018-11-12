import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Languages from "./components/Languages";
import langArray from "./components/icons/iconsArray";
import Spinner from "./components/Spinner"

// import styled from "styled-components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trendingRes: [],
      icons: langArray,
      lang: "",
      isLoading: false
    };
    // this.Hello = this.Hello.bind(this)
  }

  setLang = (e) => {
    // alert('Hello')
    this.setState({
      lang: e
    })
    // console.log(this.state.lang)

  }

  componentDidUpdate() {

    if (this.state.lang !== "") {
      fetch(
        `https://github-trending-api.now.sh/repositories?language=${this.state.lang}&since=weekly`
      )
        .then(res => res.json())
        .then(data => this.setState({ trendingRes: data }))
        .then(console.log(this.state.lang))
        .then(this.setState({lang: ""}))
        .then(this.setState({isLoading: true}))
    }
    this.state.isLoading = false;
  }

  render() {
    return (
      <div>
        <Header />
        <Languages langArray={this.state.icons} lang={(e) =>this.setLang(e)} />
        {/* <List repoName={this.state.trendingRes} langArray={this.state.icons} loading={this.state.isLoading} /> */}
        {this.state.isLoading ? <Spinner></Spinner> : <List repoName={this.state.trendingRes} langArray={this.state.icons} loading={this.state.isLoading}></List>}
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
