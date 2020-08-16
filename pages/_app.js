import * as React from "react";
import { CacheProvider } from "@emotion/core";
import { cache } from "emotion";
import { globalStyle } from "../src/styles";
import Layout from "../src/layouts/BasicLayout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CacheProvider value={cache}>
        {globalStyle}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CacheProvider>
    </>
  )
}

export default MyApp;

