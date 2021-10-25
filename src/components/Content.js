import React, { Component } from "react";
import Data from "./Data";
import Post from "./Post";

export default class Content extends Component {
  getCardsData = (data) => {
    return <Post {...data} />;
  };

  render() {
    return Data.map((data) => this.getCardsData(data));
  }
}
