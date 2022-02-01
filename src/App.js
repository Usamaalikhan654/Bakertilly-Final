import React, { Component } from "react";
import MainRouter from "./Router";
import { Beforeunload } from "react-beforeunload";

export default class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <MainRouter />
      </>
    );
  }
}
