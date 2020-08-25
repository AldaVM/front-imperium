import * as React from "react";
import { CacheProvider } from "@emotion/core";
import { cache } from "emotion";
import { globalStyle } from "../src/styles";
import Layout from "../src/layouts/BasicLayout";
import CustomerProvider from "../src/providers/CustomerProvider";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CacheProvider value={cache}>
        {globalStyle}
        <CustomerProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CustomerProvider>
      </CacheProvider>
    </>
  );
}

export default MyApp;
