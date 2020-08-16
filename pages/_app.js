import * as React from "react";
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

