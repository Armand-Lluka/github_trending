import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Languages from "./components/Languages";
import langArray from "./components/icons/iconsArray";
import Spinner from "./components/Spinner";
import Starred from "./components/Starred";
import Tabs from "./components/Tabs";
// import styled from "styled-components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trendingRes: [],
      starred: [],
      icons: langArray,
      lang: "",
      isLoading: false,
      // imageOf: langArray.StarOf,
      // ImageOn: langArray.StarOn
    };
  }

  setLang = e => {
    this.setState({
      lang: e
    });
  };

  handleEvent = (e, clickRepo) => {
    const { trendingRes, starred } = this.state;
    if(starred.indexOf(clickRepo) !== -1){
      console.log("hi")
      starred.splice(starred.indexOf(clickRepo), 1)
    }
    else if (starred.indexOf(clickRepo) === -1) {
      starred.push(clickRepo);
    }
    
    this.forceUpdate()
    // console.log(clickRepo)
    // console.log(e.currentTarget.src)
  }

  componentDidUpdate() {
    if (this.state.lang !== "") {
      fetch(
        `https://github-trending-api.now.sh/repositories?language=${
          this.state.lang
        }&since=weekly`
      )
        .then(
          console.log(
            `https://github-trending-api.now.sh/repositories?language=${
              this.state.lang
            }&since=weekly`
          )
        )
        .then(res => res.json())
        .then(data => this.setState({ trendingRes: data.slice(0, 9) }))
        .then(console.log(this.state.lang))
        .then(this.setState({ lang: "" }))
        .then(this.setState({ isLoading: true }));
    }
    this.state.isLoading = false;
  }

  render() {
    return (
      <div>
        <Header />
        <Languages langArray={this.state.icons} lang={e => this.setLang(e)} />
        <Tabs>
          <div label="repos">
            {this.state.isLoading ? (
              <Spinner />
            ) : (
              <List
                repoName={this.state.trendingRes}
                langArray={this.state.icons}
                loading={this.state.isLoading}
                handleClick={this.handleEvent}
                starredList={this.state.starred}
                starOn ={this.state.imageOn}
                starOf ={this.state.imageOf}

              />
            )}
          </div>
          <div label="starred">
            <Starred
              starredList={this.state.starred}
              langArray={this.state.icons}
            >
              {" "}
            </Starred>
          </div>

        </Tabs>

        {/* <List repoName={this.state.trendingRes} langArray={this.state.icons} loading={this.state.isLoading} /> */}
      </div>
    );
  }
}

export default App;
