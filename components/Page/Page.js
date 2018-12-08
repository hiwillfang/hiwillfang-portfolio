import React, { Component } from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import Meta from "../Meta/Meta";

// Global Theming
const theme = {};

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Meta />
          <div>{this.props.children}</div>
        </div>
      </ThemeProvider>
    );
  }
}

export default Page;
