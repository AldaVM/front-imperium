import Home from "../src/componets/Home";
import CustomerProvider from "../src/providers/CustomerProvider";

export default function Index() {
  return (
    <>
      <CustomerProvider>
        <Home />
      </CustomerProvider>
    </>
  );
}
