import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import { css, Global } from '@emotion/core';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import React, { useEffect } from 'react';
import SEO from '../next-seo.config';
import theme from '../styles/theme';

const GlobalStyle = ({ children }) => (
  <>
    <CSSReset />
    <Global
      styles={css`
        ::selection {
          background-color: #0af5f4;
          color: #fefefe;
        }

        html {
          min-width: 360px;
          scroll-behavior: smooth;
        }

        body::-webkit-scrollbar {
          width: 1em;
        }
        a {
          cursor: url('custom.gif'), url('custom.cur'), default;
        }
        body::-webkit-scrollbar-track {
          box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
          background: linear-gradient(
            rgba(10, 245, 244, 1) 0%,
            rgba(9, 219, 31, 1) 50%,
            rgba(247, 243, 34, 1) 100%
          );
        }

        body::-webkit-scrollbar-thumb {
          background-color: #e8e8e8;
        }

        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: white;
        }
      `}
    />
    {children}
  </>
);

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const tracker = window.document.createElement('script');
      const firstScript = window.document.querySelectorAll('script')[0];

      tracker.defer = true;
      tracker.setAttribute('site', process.env.NEXT_PUBLIC_FATHOM_ID);
      tracker.setAttribute('spa', 'auto');
      tracker.src = 'https://cdn.usefathom.com/script.js';
      firstScript.parentNode.insertBefore(tracker, firstScript);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle>
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta content="#da532c" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
          <meta
            content="/favicons/browserconfig.xml"
            name="msapplication-config"
          />
          <meta
            name="google-site-verification"
            content="hGZ2UuYlZvXFTtLzwGhuiBWCnXZYPZNGpH689mpvJWo"
          />
          <link href="/favicons/favicon.ico" rel="shortcut icon" />
          <link href="/favicons/site.webmanifest" rel="manifest" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com/"
            crossOrigin=""
          />
          <link rel="preconnect" href="https://pbs.twimg.com" crossOrigin="" />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
            as="style"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
            rel="stylesheet"
            media="print"
            onLoad="this.media='all'"
          />
          <link
            href="/favicons/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/favicons/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/favicons/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link
            color="#5bbad5"
            href="/favicons/safari-pinned-tab.svg"
            rel="mask-icon"
          />
        </Head>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </GlobalStyle>
    </ThemeProvider>
  );
};

export default App;
