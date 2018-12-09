import React, { Component } from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import Meta from "../Meta/Meta";
import Navbar from "../Navbar/Navbar";

// Global Theming
const theme = {};

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Meta />
          <Navbar />
          <div>{this.props.children}</div>
        </div>
      </ThemeProvider>
    );
  }
}

export default Page;
