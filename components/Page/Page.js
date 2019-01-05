import React, { Component } from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import Meta from "../Meta/Meta";
import Header from "../Header/Header";

// Global Theming
const theme = {};

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Meta />
          <Header />
          <div>{this.props.children}</div>
        </>
      </ThemeProvider>
    );
  }
}

export default Page;
