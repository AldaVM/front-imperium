import * as React from "react";
import { CacheProvider } from "@emotion/core";
import { cache } from "emotion";
import { globalStyle } from "../src/styles";
import Layout from "../src/layouts/BasicLayout";
import RootContext from "../src/contexts/rootContext"

function MyApp({ Component, pageProps }) {

  const [customer, setCustomer] = React.useState(null);
  const [turns, setTurns] = React.useState([])
  const [currentTurn, setCurrentTurn] = React.useState({ _id: null })

  const updateCustomer = (currentCustomer) => setCustomer(currentCustomer);
  const updateTurns = (currentTurns) => setTurns(currentTurns);
  const updateCurrentTurn = (currentTurn) => setCurrentTurn(currentTurn)

  const state = React.useMemo(
    () => ({
      customer: {
        customer,
        updateCustomer
      },
      turns: {
        turns,
        updateTurns
      },
      currentTurn: {
        currentTurn,
        updateCurrentTurn
      }
    }), [customer, turns, currentTurn]);

  return (
    <>
      <CacheProvider value={cache}>
        {globalStyle}
        <RootContext.Provider value={state}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RootContext.Provider>
      </CacheProvider>
    </>
  )
}

export default MyApp;

