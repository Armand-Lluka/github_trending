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
      apiSearch: false,
      icons: langArray,
      lang: "",
      isLoading: false
    };
  }

  setLang = e => {
    this.setState(prevState => ({
      lang: e,
      apiSearch: !prevState.apiSearch,
      isLoading: !prevState.isLoading
    }));
  };

  handleEvent = clickRepo => {
    const { starred } = this.state;

    if (starred.indexOf(clickRepo) === -1) {
      this.setState(prevState => ({
        starred: [...prevState.starred, clickRepo]
      }));
    } else if (starred.indexOf(clickRepo) !== -1) {
      console.log(starred.indexOf(clickRepo))
      this.setState(prevState => ({
        // starred: starred.splice(starred.indexOf(clickRepo))
        starred: starred.filter( item => item !== clickRepo)

      }));
    }
  };

  handleSpinner = () => {
    this.setState(prevState => ({
      isLoading: !prevState.isLoading
    }));
  };

  componentDidUpdate() {
    if (this.state.lang !== "" && this.state.apiSearch === true) {
      fetch(
        `https://github-trending-api.now.sh/repositories?language=${
          this.state.lang
        }&since=weekly`
      )
        .then(res => res.json())
        .then(data => {
          if (!this.state.trendingRes.includes(data)) {
            console.log(data);
            this.setState({ trendingRes: data.slice(0, 9) });
          }
        })
        .then(this.setState(prevState => ({ apiSearch: !prevState.apiSearch })))
        .then(
          this.setState(prevState => ({ isLoading: !prevState.isLoading }))
        );
    }

    this.state.isLoading = false;
  }

  render() {
    return (
      <div className="min-vh-100">
        <Header />
        <Languages langArray={this.state.icons} lang={e => this.setLang(e)} />
        <Tabs >
          <div label="Trending">
            {/* {" "} */}
            {this.state.isLoading ? (
              <Spinner
                isLoading={this.handleSpinner}
                repoName={this.state.trendingRes}
              />
            ) : (
              <List
                isLoading={this.handleSpinner}
                repoName={this.state.trendingRes}
                langArray={this.state.icons}
                loading={this.state.isLoading}
                handleClick={this.handleEvent}
                starredList={this.state.starred}
                starOn={this.state.imageOn}
                starOf={this.state.imageOf}
              />
            )}
          </div>
          <div label="Starred ">
            <Starred
              starredList={this.state.starred}
              langArray={this.state.icons}
              handleClick={this.handleEvent}
            />
          </div>
        </Tabs>
      </div>
    );
  }
}

export default App;

