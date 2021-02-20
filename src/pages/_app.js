import PropTypes from "prop-types";
import Head from "next/head";
import { Normalize } from "styled-normalize";
import GlobalStyle from "styles/global";
import styled from "styled-components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Head>
        <link rel="icon" href="" />
        <link href="/fonts/fonts.css" rel="stylesheet" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta name="author" content="Corey White" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.shape({})
};
