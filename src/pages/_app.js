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
      <Component {...pageProps} />
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.shape({})
};
