import App, { Container } from "next/app";
import React from "react";
import Page from "../components/Page/Page";

class WillsApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Page>
          <Component {...pageProps} />
        </Page>
      </Container>
    );
  }
}

export default WillsApp;
