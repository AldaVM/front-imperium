import * as React from "react";
import { CacheProvider } from "@emotion/core";
import { cache } from "emotion";
import { globalStyle } from "../src/styles";
import Layout from "../src/layouts/BasicLayout";
import RootContext from "../src/contexts/rootContext"

function MyApp({ Component, pageProps }) {

  const [customer, setCustomer] = React.useState(null);
  const [turns, setTurns] = React.useState([]);
  const [currentTurn, setCurrentTurn] = React.useState({ _id: null });
  const [paidMethod, setPaidMethod] = React.useState(null);
  const [idCustomer, setIdCustomer] = React.useState(null);

  const updateCustomer = (currentCustomer) => setCustomer(currentCustomer);
  const updateTurns = (currentTurns) => setTurns(currentTurns);
  const updateCurrentTurn = (currentTurn) => setCurrentTurn(currentTurn);
  const updateIdCustomer = (currentCustomer) => setIdCustomer(currentCustomer);

  const state = React.useMemo(
    () => ({
      currentCustomer: {
        idCustomer,
        updateIdCustomer
      },
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
      },
      paid: {
        paidMethod,
        setPaidMethod
      }
    }), [customer, turns, currentTurn, paidMethod]);

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

