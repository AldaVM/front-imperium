import * as React from "react";
import Head from "next/head";
import { CacheProvider } from "@emotion/core";
import { cache } from "emotion";
import { globalStyle } from "../src/styles";
import Layout from "../src/layouts/BasicLayout";
import { RootContext } from "../src/context";


function MyApp({ Component, pageProps }) {
  const [user,setUser]=React.useState(null);

  const setUpdateUser=(user)=>{
    setUser(user);
  }

  const authData=React.useMemo(
    ()=>({
      user,
      setUpdateUser
    }),[user]);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/png"
          href=""
        />
        <meta name="author" content="Aldair Valencia <aldairvm95@gmail>" />
        <meta
          name="keywords"
          content="Registro Imperium Cross"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <CacheProvider value={cache}>
        {globalStyle}
        <RootContext.Provider value={authData}>
        <Layout>
               <Component {...pageProps}/>
        </Layout>
        </RootContext.Provider>
      </CacheProvider>
    </>

  )
}

export default MyApp;

