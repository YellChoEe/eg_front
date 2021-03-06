import React from 'react';
import { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppProps } from 'next/app';
import GlobalStyles from '../utils/global-styles';
import Head from 'next/head';

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Emotion Game</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0" />
        <meta name="description" content="Emotion Game" />
        <meta name="author" content="devho813 <devho813@gmail.com>" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
